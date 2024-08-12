import {ErrorKind, SPError} from "./SPError.js";
import * as axios from "axios";
import {AxiosRequestConfig, AxiosResponse} from "axios";

const axiosInstance = axios.default.create({
    headers: {
        Accept: "application/json"
    },
    responseType: "json"
});

export abstract class RequestSender {
    protected abstract dontThrowFor(): ErrorKind[];
    protected abstract  getAuth(): Promise<string>;
    abstract get baseUrl(): string;

    private async getConfig<D>(config?: AxiosRequestConfig<D>): Promise<AxiosRequestConfig<D>> {
        return {
            ...config,
            headers: {
                ...config?.headers,
                Authorization: `Bearer ${await this.getAuth()}`
            },
            baseURL: this.baseUrl
        } as AxiosRequestConfig<D>;
    }

    /**
     * Handles the response from the server, converting it to a SPError if it is an error response
     * @template T The type of the response
     * @param {Promise<AxiosResponse<T, any>>} response The promise of the response from the server to handle
     * @param {string} url The url that was requested
     * @private
     * @returns {Promise<T | null, undefined>} The response data, null if sharepoint says its null, or undefined if an error occurred and was handled.
     * @throws {SPError|AxiosError|Error} If the response is an error response and the error is not handled
     */
    private async handleResponse<T>(response: Promise<AxiosResponse<T, any>>, url: string): Promise<T | null | undefined> {
        try {
            const result = await response;
            if (result?.data?.["odata.null"]) {
                return null;
            }
            return result.data;
        } catch (error) {
            const newError = SPError.ConvertError(error, {getting: `${url}`, from: `${this.baseUrl}`}, this.dontThrowFor());
            if (newError) {
                return newError;
            }
        }
    }

    /**
     * Performs a GET request to the specified url
     * @template T The type of the response
     * @param {string} url The url to perform the request to
     * @param {AxiosRequestConfig} [config] The config for the request
     * @returns {Promise<T | null | undefined>} The response data, null if sharepoint says its null, or undefined if an error occurred and was handled.
     * @protected
     */
    protected async getRequest<T = any>(url: string, config?: AxiosRequestConfig): Promise<T | null | undefined> {
        return this.handleResponse(axiosInstance.get<T>(url, await this.getConfig(config)), url);
    }

    protected async postRequest<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T | undefined> {
        return this.handleResponse(axiosInstance.post<T>(url, data, await this.getConfig(config)), url);
    }

    protected async putRequest<T = object, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T | null | undefined> {
        return this.handleResponse(axiosInstance.put<T>(url, data, await this.getConfig(config)), url);
    }

    protected async patchRequest<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T | undefined> {
        return this.handleResponse(axiosInstance.patch<T>(url, data, await this.getConfig(config)), url);
    }

    protected async deleteRequest<T = any>(url: string, config?: AxiosRequestConfig): Promise<T | undefined> {
        return this.handleResponse(axiosInstance.delete<T>(url, await this.getConfig(config)), url);
    }
}


