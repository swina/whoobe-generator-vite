<template>
    <block.preview v-if="template" :doc="template.json" :article="true"/>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>

