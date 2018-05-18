<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header" v-if="header">
                        <slot name="header">
                            {{ header }}
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            {{ body }}
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="btn btn-primary" @click="$emit('close')">
                                OK
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: ['header', 'body']
    }
</script>