<template>
    <div>
        <el-form ref="form" :model="model">
            <el-form-item label="用户名">
                <el-input v-model="model.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="model.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import md5 from 'blueimp-md5'
import http from '/@/request'
import { errorHandle, succHandle } from '/@/utils/commonInfo'

import { decrypt } from '/@/request/rsa'

const handleToken: (token: string) => void = (token) => {
    const userId: string = decrypt(token)
    console.log(userId)
}

export default defineComponent({
    name: 'manage',
    setup() {
        const router = useRouter()
        async function onSubmit() {
            const { username, password } = obj.model
            try {
                const { token } = await http({
                    method: 'post',
                    url: '/login',
                    data: {
                        username,
                        password: md5(password),
                    },
                })
                handleToken(token)
            } catch (error) {
                errorHandle(error)
            }
        }
        const obj = reactive({
            model: {
                username: '',
                password: '',
            },
            onSubmit,
        })
        return {
            ...obj,
        }
    },
})


</script>