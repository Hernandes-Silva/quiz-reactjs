const getRequestErrorMessage = (err: any): string => {
    const message =
        err.response?.data?.detail ??
        err.message ??
        `An unexpected error has occurred, we are working to resolve it.`

    return message
}

export default getRequestErrorMessage;