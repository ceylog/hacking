<template>
    <el-container>
        <Sidebar :isCollapse="sidebarIsCollapse" />
        <el-container>
            <Navbar />
            <MainView />
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>

</template>

<<script>
import Sidebar from '@/components/layout/Sidebar'
import Navbar from '@/components/layout/Navbar'
import MainView from '@/components/layout/MainView'
import { mapGetters } from 'vuex'
export default {
  name:'layout',
  components:{
      Sidebar,
      Navbar,
      MainView
  },
  computed:{
      ...mapGetters(['sidebarIsCollapse'])
  }
}
</script>
