export enum ClaimValueType {
    Base64Binary = "!", // http://www.w3.org/2001/XMLSchema#base64Binary
    Bool = '"', // http://www.w3.org/2001/XMLSchema#boolean
    Date = "#", // http://www.w3.org/2001/XMLSchema#date
    DateTime = "$", // http://www.w3.org/2001/XMLSchema#dateTime
    DaytimeDuration = "%", // http://www.w3.org/TR/2002/WD-xquery-operators-20020816#dayTimeDuration
    Double = "&", // http://www.w3.org/2001/XMLSchema#double
    DSAKeyValue = "'", // http://www.w3.org/2000/09/xmldsig#DSAKeyValue
    HexBinary = "(", // http://www.w3.org/2001/XMLSchema#hexBinary
    Integer = ")", // http://www.w3.org/2001/XMLSchema#integer
    KeyInfo = "*", // http://www.w3.org/2000/09/xmldsig#KeyInfo
    RFC822Name = "+", // http://www.w3.org/2001/XMLSchema#rfc822Name
    RSAKeyValue = "-", // http://www.w3.org/2000/09/xmldsig#RSAKeyValue
    String = ".", // http://www.w3.org/2001/XMLSchema#string
    Time = "/", // http://www.w3.org/2001/XMLSchema#time
    X500Name = "0", // http://www.w3.org/2001/XMLSchema#x500Name
    YearMonthDuration = "1", // http://www.w3.org/TR/2002/WD-xquery-operators-20020816#yearMonthDuration
}


export const ClaimValueTypeNames = {
    [ClaimValueType.Base64Binary]: "Base64Binary",
    [ClaimValueType.Bool]: "Bool",
    [ClaimValueType.Date]: "Date",
    [ClaimValueType.DateTime]: "DateTime",
    [ClaimValueType.DaytimeDuration]: "DaytimeDuration",
    [ClaimValueType.Double]: "Double",
    [ClaimValueType.DSAKeyValue]: "DSAKeyValue",
    [ClaimValueType.HexBinary]: "HexBinary",
    [ClaimValueType.Integer]: "Integer",
    [ClaimValueType.KeyInfo]: "KeyInfo",
    [ClaimValueType.RFC822Name]: "RFC822Name",
    [ClaimValueType.RSAKeyValue]: "RSAKeyValue",
    [ClaimValueType.String]: "String",
    [ClaimValueType.Time]: "Time",
    [ClaimValueType.X500Name]: "X500Name",
    [ClaimValueType.YearMonthDuration]: "YearMonthDuration",
}

