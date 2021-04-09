<template>
  <div class="comparison">
    <section id="knowledge" class="viewBlock">
      <div class="bookBox">
        <a class="lastBtn"><</a>
        <a class="nextBtn">></a>
        <div class="bookPage frist">
          <h2>古今对比（了解）</h2>
        </div>
        <div class="bookPage runPage">
          <div class="bookWord">
            <span>古今官职对比</span>
            <p>太守（战国至秦朝称郡守，汉景帝时期改太守，为一郡的行政最高长官，除治民、进贤、决讼、检奸外，还可以自行任免所属掾史。至隋初存州废郡，以州刺史代郡守之任，此后太守不再是正式官名。秦分三十六郡，比县大。）
              <font class="hong">省辖市市长</font>
            </p>
            <p>
              刺史（汉武帝分全国为十三州，刺史掌管一州军政大权。孝成帝时期刺史改称州牧，职权进一步扩大，由监察官变为地方军事行政长官。）
               <font class="hong">省(市)长兼省(市)军(分)区司令员</font>
            </p>
            <p>
              京兆尹（三辅(治理京畿地区的三位官员，即京兆尹、左冯翊、右扶风)之一，西汉京畿地方行政长官。）
              <font class="hong">北京市市长</font>
            </p>
            <p>
              太尉（秦至汉均有设置，为全国军政首脑。)
              <font class="hong">国防部长</font>
            </p>
            <span class="pageNumber">1</span>
          </div>
        </div>
        <div class="bookPage runPage">
          <div class="bookWord">
            <p>
              廷尉（秦汉至北齐主管司法的最高官吏，执掌法律、主审要案的大臣。）
              <font class="hong">最高法院院长</font>
            </p>
            <p>
              尚书令（参议大政，综管政务，百官之长。)
              <font class="hong">行政院长</font>
            </p>
            <p>
              光禄大夫（皇帝身边顾问之臣）
              <font class="hong">中央顾问委员会常委</font>
            </p>
            <p>
              吏部尚书（掌管全国文武官吏的任免、考课、升降、调动、封勋等事务，是吏部的最高长官，为中央六部尚书之首。唐宋是正三品，明代是正二品，清代为从一品。通常称为天官、冢宰、太宰。）
              <font class="hong">人事部长</font>
            </p>
            <p>
              中书令（掌管皇帝命令发布。司马迁中年以后担任中书令，是中国历史上第一位中书令。）
               <font class="hong">“两办”秘书长</font>
            </p>
            <span class="pageNumber">2</span>
          </div>
        </div>
        <div class="bookPage runPage">
          <div class="bookWord">
            <p>
              行军总管（统领军队出征的主将。）
               <font class="hong">前沿总指挥</font>
            </p>
            <p>
              知府。（地方行政长官，总管州、县事务。掌一府之政令，总领各属县，凡宣布国家政令、治理百姓，审决讼案，稽察奸宄，考核属吏，征收赋税等一切政务皆为其职责。)
              <font class="hong">市长(不包括县级市)、市委书记</font>
            </p>
            <p>
              给事中（皇帝禁中寄禄官。）
               <font class="hong">元首生活或政治秘书</font>
            </p>
            <p>
              县丞（协助县令治理一县之事。）
              <font class="hong">副县长</font>
            </p>
            <p>
              教授（古时设置在地方官学中的学官，府掌训导考核学生。）
               <font class="hong">省教育厅长</font>
            </p>
            <span class="pageNumber">3</span>
          </div>
        </div>
        <div class="bookPage last">
          <div class="bookWord">
                      李宣宣、李芮
            <span class="pageNumber">4</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from "jquery";
import "../js/book";
export default {};
</script>

<style scoped>
@import url("../css/book.css");
h2 {
  text-align: center;
  line-height: 500px;
  font-size: 30px;
  font-family: "楷体";
  font-weight: 500;
}
p {
  font-size: 12px;
}
span {
  font-size: 17px;
}
img {
  margin-top: 3.25rem;
  margin-left: -1.1rem;
}
.hong{
  color: red;
}

</style>