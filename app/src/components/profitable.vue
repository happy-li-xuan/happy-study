<template>
  <div class="profitable">
    <div id="components-layout-demo-basic">
      <a-layout>
        <a-layout-header>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title">官职演变</template>
              <el-menu-item index="2-1">
                <router-link to="/profitable/system">官职制度演变</router-link>
                </el-menu-item>
              <el-menu-item index="2-2">
                <router-link to="/profitable/select">选官制度演变</router-link>
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
               <router-link to="/profitable/change">官职变动</router-link>
               </el-menu-item>
            <el-menu-item index="4">
              <router-link to="/profitable/comparison">古今对比</router-link>
              </el-menu-item>
            <!-- <el-menu-item index="5">视频解析</el-menu-item> -->
            <!-- <el-menu-item index="6">资料分享</el-menu-item> -->
            <el-menu-item index="7">
              <router-link to="/profitable/music">音乐欣赏</router-link>
              </el-menu-item>
          </el-menu>
        </a-layout-header>
        <br />
        <a-layout-content>
          <el-carousel :interval="3000" type="card" height="380px">
            <el-carousel-item
              ><img src="../assets/lunbo1.png" width="1000px"
            /></el-carousel-item>
            <el-carousel-item
              ><img src="../assets/lunbo2.png" width="1000px"
            /></el-carousel-item>
            <el-carousel-item
              ><img src="../assets/lunbo3.jpg" width="1000px"
            /></el-carousel-item>
            <el-carousel-item
              ><img src="../assets/lunbo4.jpg" width="1000px"
            /></el-carousel-item>
          </el-carousel>
          <div class="culture">
            <h2>传统文化介绍</h2>
            <p>
              中国传统文化，是中华文明成果根本的创造力，是民族历史上道德传承、各种文化思想、精神观念形态的总体。中华文化，依据中国历史大系表顺序，经历了经历了有巢氏、燧人氏、伏羲氏、神农氏（炎帝）、黄帝（轩辕氏）、尧、舜、禹等时代，到夏朝建立。之后绵延发展至今。
            </p>
            <p>
              中华传统文化主要由儒、佛、道三家文化为主流组成。传统文化不仅思想深邃圆融，内容广博，更重要的是，儒家、佛家、道家三家文化，高扬道德，为国人提供了立身处世的行为规范，以及最终的精神归宿。儒家以仁义教化为核心，为历代儒客尊崇，道学以顺应自然为核心;佛学以慈悲、大爱、解脱为核心，强调""诸恶莫作，众善奉行”
            </p>
            <p>
              在儒、佛、道三家文化基础上派生出的各种艺术(如绘画、雕塑、书法、戏剧、节日等)，是其具体表现形式。
            </p>
            <p>
              在和平与发展成为时代主题的今天，文化的力量，不仅是一个民族的生命力、创造力、影响力的决定性要素，也越来越成为一个国家综合国力和国际竞争力的重要组成部分。文化软实力突出地表现为一种超越时空的感召力，当今世界一谈到孔孟老庄、“四大发明”、京剧等，人们便为中华文化的博大精深所深深吸引;一谈到黄山黄河、长江长城，人们便对中国这个古老东方国度的壮美和神秘津津乐道。党的十七大向全国人民明确提出了提高国家文化软实力的战略任务，而高校是提升国家文化软实力的重要基地。随着我国经济社会的发展，我国高等教育改革和发展进入了新的历史阶段。新时期，高校如何提高大学生的综合素质，成为全社会关注的焦点。胡锦涛总书记在
            </p>
          </div>
          <div class="book">
            <h2>相关书籍推荐</h2>
            <div class="shu">
              <div style="background-color: #ececec; padding: 20px" >
                <a-row :gutter="16">
                  <a-col :span="8">
                    <a-card title="《中国古代官阶制度引论》" :bordered="false" >
                      <img src="../assets/book1.png" />
                      <p></p>
                      <p>在社会科学理论的基础上，作者系统地构建了古代官阶的研究模式，并提出了一系列的问题、线索以及相应的研究方法和概念。基于“年级-位置”的角度来看,排名研究对象被定义为“官方立场的分级分类”和“官方分级分类”,分别讨论产品等级工资的组成元素,特权,职责,资格,礼貌,品味的风格结构和骨架,年级长数量和状态使用规则等等
                      </p>
                    </a-card>
                  </a-col>
                  <a-col :span="8">
                    <a-card title="《宋代官制辞典》" :bordered="false">
                      <img src="../assets/book2.png" />
                       <p></p> 
                       <p>《宋代官制辞典》是一部多功能而又别开生面的宋代官制辞典。内容包括官司名、官吏名及其职源、沿革、职掌、官品、编制、简称与别名、职官术语、典故，以及俸禄、勋、爵、阶等附表。
                        </p>
                    </a-card>
                  </a-col>
                  <a-col :span="8">
                    <a-card title="《中国古代职官科举研究》" :bordered="false">
                     <img src="../assets/book3.png" />
                     <p></p>
                     <p>此书为龚延明教授25多年的中国古代（主要是宋代）对官员的科举制度，收集了官方的科举研究的结果，在正式的科举研究成果代表他。共收到论文43篇，按内容分为四个部分：第一部分研究，20个研究室；科举制度第二个7；第三个朝代，科举和公文制度的10篇文章；第四篇科举考试的书籍，6本。</p>
                    </a-card>
                  </a-col>
                </a-row>
              </div>
            </div>
          </div>
        </a-layout-content>
        <a-layout-footer>花以芬芳而美好，官以清廉而高贵</a-layout-footer>
      </a-layout>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
#components-layout-demo-basic .ant-layout-header {
  background: #fff;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  background: rgb(75, 72, 72);
  color: #fff;
}
.el-menu-demo {
  float: right;
  background: #fff;
}
/*轮播图*/
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/*传统文化*/
.culture {
  width: 90%;
  margin: 0 auto;
}
h2 {
  font-family: "宋体";
  font-weight: 400;
  text-align: center;
}
p {
  text-indent: 2em;
}
/*推荐书籍*/
.book {
  width: 90%;
  margin: 0 auto;
}
.shu {
  width: 85%;
  margin: 0 auto;
}
</style>