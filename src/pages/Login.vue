<template>
    <div class="page-block flex justify-center items-center w-full h-full">
        <form @submit.prevent="loginEvent" class="form flex flex-col gap-2">

            <h2 class="form__title">Войти в систему</h2>

            <div class="form__field relative">
                <input class="form__field_input" id="email" type="email" v-model="form.email" required
                       placeholder="E-mail">
                <label class="form__field_label" for="email">E-mail</label>
            </div>
            <div class="form__field relative">
                <input class="form__field_input" id="password" type="password" v-model="form.password" required minlength="6"
                       placeholder="Пароль">
                <label class="form__field_label" for="password">Пароль</label>
            </div>

            <button class="form__button" type="submit">Войти</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";

const form = reactive({
    email: '',
    password: '',
})

const loginEvent = () => {

}
</script>

<style scoped lang="scss">
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