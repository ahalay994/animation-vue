<template>
    <form @submit.prevent="submitEvent" class="form flex flex-col gap-2">
        <h2 class="form__title">{{ title }}</h2>
        <slot/>
        <button class="form__button" type="submit">{{ submitText }}</button>
    </form>
</template>

<script setup lang="ts">
const {title, submitText} = defineProps<{
    title?: string
    submitText: string
}>()

const emits = defineEmits<{
    (e: 'submit'): void
}>()

const submitEvent = () => emits('submit')
</script>

<style scoped lang="scss">
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