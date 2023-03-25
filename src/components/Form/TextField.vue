<template>
    <div class="form__field relative">
        <input
            :id="id"
            class="form__field_input"
            :value="modelValue"
            :name="name"
            :type="type"
            :required="required"
            :placeholder="label"
            :minlength="minlength"
            :autocomplete="name"
            @input='inputEvent'
        >
        <label v-if="label" class="form__field_label" :for="id">{{label}}</label>
    </div>
</template>

<script setup lang="ts">
const {modelValue, required, label, id, type, minlength, name} = withDefaults(defineProps<{
    modelValue: string
    required?: boolean
    type?: string
    name?: string | undefined
    id: string
    label?: string
    minlength?: number
}>(), {
    required: false,
    type: 'string',
    minlength: 0,
    name: undefined,
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const inputEvent = (event: Event) => {
    const target = event.target as HTMLInputElement
    emits('update:modelValue', target.value)
}
</script>

<style scoped lang="scss">
.form {
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
}
</style>