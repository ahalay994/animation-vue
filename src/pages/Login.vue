<template>
    <div class="page-block flex justify-center items-center w-full h-full px-4">
        <v-form @submit="loginEvent" title="Войти в систему" submit-text="Войти">
            <text-field
                id="email"
                type="email"
                v-model="form.email"
                :required="true"
                label="E-mail"
                name="email"
            />

            <text-field
                id="password"
                type="password"
                v-model="form.password"
                :required="true"
                label="Пароль"
                :minlength="6"
                name="password"
            />
        </v-form>
    </div>

    <teleport to="body">
        <div class="success-surprise" v-if="successSurpriseVisible">
            <img src="/src/assets/cat.svg" alt="">
        </div>
    </teleport>
</template>

<script setup lang="ts">
import {onUnmounted, reactive, ref} from "vue";
import TextField from '@c/Form/TextField.vue'
import VForm from '@c/Form/index.vue'

const form = reactive({
    email: '',
    password: '',
})

const successSurpriseVisible = ref(false)
const loginEvent = () => {
    successSurpriseVisible.value = true
    setTimeout(() => successSurpriseVisible.value = false, 10000)
}

onUnmounted(() => {
    form.email = '';
    form.password = '';
})
</script>

<style scoped lang="scss">
.success-surprise {
    position: fixed;
    background: rgba(173, 126, 255, 0.1);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: .3s ease-in-out;

    img {
        opacity: 0;
        transition: .3s ease-in-out;
        position: absolute;
        width: 150px;
        animation: alternate;
        animation-duration: 10s;
        animation-name: cat;
    }

    @keyframes cat {
        0% {
            opacity: 1;
            top: 0;
            left: 0;
        }
        16.66% {
            opacity: 1;
            top: 0;
            left: calc(100% - 150px);
        }
        33.33% {
            opacity: 1;
            top: calc(100% - 150px);
            left: calc(100% - 150px);
        }
        50% {
            opacity: 1;
            top: calc(100% - 150px);
            left: 0;
        }
        66.66% {
            opacity: 1;
            top: 0;
            left: 0;
        }
        83.33% {
            opacity: 1;
            top: 50%;
            left: 50%;
        }
        100% {
            opacity: 0;
            top: 50%;
            left: 50%;
            transform: rotate(360deg);
        }
    }
}

.page-block {
    width: 100%;
    height: 100%;
    background-image: url("/src/assets/bg-login.webp");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.form {
    width: 100%;
    max-width: 468px;
    padding: 24px;
    border: 1px solid #727272;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, .55);
    backdrop-filter: blur(5px);

    &__title {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
    }

    &__field {
        padding-top: 24px;

        &_label {
            position: absolute;
            bottom: 8px;
            left: 0;
            transition: all ease-in-out .3s;
        }

        &_input {
            background: transparent;
            color: #000;
            padding: 8px 12px 8px 0;
            width: 100%;
            outline: none;
            border-bottom: 1px solid #696969;

            &::placeholder {
                font-size: 0;
            }

            &:focus, &:not(:placeholder-shown) {
                & ~ label {
                    transform: translateY(-32px);
                    font-size: 14px;
                    font-weight: 600;
                }
            }

            &:focus:invalid {
                border-color: #c70000;
                & ~ label {
                    color: #c70000;
                }
            }

            &:focus:valid {
                border-color: #00b000;
            }
        }
    }

    &__button {
        background-color: #6e6e6e;
        padding: 6px 8px;
        border: 1px solid #bfbfbf;
        margin-top: 8px;
        color: #dbdbdb;
        transition: all ease-in-out .3s;

        &:hover {
            background-color: #414141;
            border-color: #8f8f8f;
            color: #c5c5c5;
        }
    }
}
</style>