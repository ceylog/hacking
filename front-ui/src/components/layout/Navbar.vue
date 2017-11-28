<template>
    <el-header style="text-align: right; font-size: 12px">
        <el-radio-group v-model="sidebarIsCollapse">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
         <span>王小虎</span>
    </el-header>
</template>

<script>
    export default {
        name:'Navbar',
        data(){
            return {
                
            }
        },
        computed:{
            sidebarIsCollapse: {
                set: function(nv) {
                    this.$store.dispatch('SetSidebarIsCollapseAction',nv)
                },
                get: function(){
                    return this.$store.getters.sidebarIsCollapse
                }
            }
        }
    }
</script>