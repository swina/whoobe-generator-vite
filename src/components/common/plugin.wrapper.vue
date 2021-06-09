<template>
    <div class="relative"> 
        <component 
            :is="component"
            :plugin="plugin"
            :editor="$attrs.editor"/>
    </div>
</template>

<script>
export default {
    data:()=>({
        component: null,
        enabled: false,
    }),
    props: ['doc','plugin'],
    computed:{
    },
    mounted(){
        let name = this.plugin.general.path 
        this.component = () =>  import( `../components/plugins/${name}.vue` )
    }
}
</script>