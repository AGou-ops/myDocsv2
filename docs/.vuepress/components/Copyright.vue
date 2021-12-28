<template>
    <div>
        <div v-html="html"/>
        <p>
<br>
—————————— <br>
作者：AGou-ops <br>
链接：<a :href="location">{{location}}</a> <br>
来源：AGou's Docsv2 <br>
版权声明：WPTPL v2，随意转载，无需注明来源。
        </p>
    </div>
</template>

<script>
    export default {
        props: ['html'],

        created() {
            this.location = window.location
        },
    }
</script>

<style scoped>

</style>