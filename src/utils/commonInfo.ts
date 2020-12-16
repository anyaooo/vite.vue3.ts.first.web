import { ElMessage } from 'element-plus'

interface response {
    msg: string
    status?: string
    state?: string
}

type errorType = 'error' | 'warning'

export const errorHandle: (error: String | response, type: errorType) => void = (error, type = 'error') => {
    const message: string = typeof error === 'object' ? (error as response).msg : error
    ElMessage({
        type, message
    })

}

type succType = 'success' | 'info'

export const succHandle: (succ: String | response, type: succType) => void = (succ, type = 'success') => {
    const message = typeof succ === 'object' ? (succ as response).msg : succ
    ElMessage({
        type, message
    })
}