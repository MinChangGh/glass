<template>
    <div class="container">
        <div class="title">您可以:</div>
        <div class="content">
            <div class="select-goods select-all">
                <img src="~@/assets/distribute/images/shop/img_pro01.png" alt @click="selectAll">
                <div class="select-desc">
                    <span>一键导入</span>
                    <span>(一键复制上级产品)</span>
                </div>
            </div>
            <div class="select-goods select-part">
                <img src="~@/assets/distribute/images/shop/img_pro02.png" alt @click="selectParts">
                <div class="select-desc">
                    <span>挑选产品</span>
                    <span>(自定义产品复制到店铺)</span>
                </div>
            </div>
        </div>
        <div v-if="show" class="agreement">
            <div class="agreement-title">法律声明及隐私权政策：</div>
            <div class="agreement-content">
                <p>您的信任对我们非常重要，我们深知个人信息对您的重要性，我们将按法律法规要求，采取相应安全保护措施，尽力保护您的个人信息安全可控。鉴此，我们制定本《法律声明及隐私权政策》（下称“本政策 /本隐私权政策”）并提醒您：</p>
                <P>本政策适用于本平台。如我们关联公司的产品或服务中使用了平台提供的产品或服务但未设独立法律声明及隐私权政策的，则本政策同样适用于该部分产品或服务。需要特别说明的是，本政策不适用于其他第三方向您提供的服务，也不适用于平台中已另行独立设置法律声明及隐私权政策的产品或服务，您向商户提供的个人信息不适用本政策。</P>
                <p>在使用我们各项产品或服务前，请您务必仔细阅读并透彻理解本政策，在确认充分理解并同意后使用相关产品或服务。一旦您开始使用平台各项产品或服务，即表示您已充分理解并同意本政策。本声明属于本平台不可分割的一部分。</p>
                <p class="tit">1. 适用范围</p>
                <p>（1）在您注册平台账号时，您根据平台要求提供的个人注册信息；</p>
                <p>（2）在您使用平台网络服务，或访问平台网页时，平台自动接收并记录的您的浏览器和计算机、应用程序上的信息，包括但不限于您IP地址、应用程序、手机类型、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；</p>
                <p>（3）平台通过合法途径从商业伙伴处取得的用户个人数据。</p>
                <p>您了解并同意，以下信息不适用本隐私权政策：</p>
                <p>（4）您在使用平台提供的搜索服务时输入的关键字信息；</p>
                <p>（5）平台收集到的您所发布的有关信息数据，包括但不限于参与活动、成交信息等</p>
                <p>（6）违反法律规定或违反平台规则行为及平台已对您采取的措施。</p>
                <p class="tit">2. 信息使用</p>
                <p>（1）平台不会向任何无关第三方提供、出售、出租、分享或交易您的个人信息，除非事先得到您的许可，或该第三方和平台（含平台关联公司）单独或共同为您提供服务，且在该服务结束后，其将被禁止访问包括其以前能够访问的所有这些资料。</p>
                <p>（2）平台亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播您的个人信息。任何平台用户如从事上述活动，一经发现，平台有权立即终止与该用户的服务协议。</p>
                <p>（3）为服务用户的目的，平台可能通过使用您的个人信息，向您提供您感兴趣的信息，包括但不限于向您发出产品和服务信息，或者与平台合作伙伴共享信息以便他们向您发送有关其产品和服务的信息（后者需要您的事先同意）。</p>
                <p class="tit">3. 信息披露</p>
                <p>在如下情况下，平台将依据您的个人意愿或法律的规定全部或部分的披露您的个人信息：</p>
                <p>（1）经您事先同意，向第三方披露；</p>
                <p>（2）为免除您在生命、身体或财产方面之急迫危险；</p>
                <p>（3）为提供您所要求的产品和服务，而必须和第三方分享您的个人信息；</p>
                <p>（4）根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露；</p>
                <p>（5）如您出现违反中国有关法律、法规或者平台服务协议或相关规则的情况，需要向第三方披露；</p>
                <p>（6）如您是适格的知识产权投诉人并已提起投诉，应被投诉人要求，向被投诉人披露，以便双方处理可能的权利纠纷；</p>
                <p>（7）在平台上创建的某一交易中，如交易任何一方履行或部分履行了交易义务并提出信息披露请求的，平台有权决定向该用户提供其交易对方的联络方式等必要信息，以促成交易的完成或纠纷的解决。</p>
                <p>（8）其它平台根据法律、法规或者网站政策认为合适的披露。</p>
                <p class="tit">4. 信息存储和交换</p>
                <p>平台收集的有关您的信息和资料将保存在平台及（或）其关联公司的服务器上，这些信息和资料可能传送至您所在国家、地区或平台收集信息和资料所在地的境外并在境外被访问、存储和展示。</p>
                <p class="tit">5. 信息安全</p>
                <p>（1）平台帐号均有安全保护功能，请妥善保管您的用户名及密码信息。平台将通过对用户密码进行加密等安全措施确保您的信息不丢失，不被滥用和变造。尽管有前述安全措施，但同时也请您注意在信息网络上不存在“完善的安全措施”。</p>
                <p>（2）在使用平台网络服务进行网上交易时，您不可避免的要向交易对方或潜在的交易对方披露自己的个人信息，如联络方式或者邮政地址。请您妥善保护自己的个人信息，仅在必要的情形下向他人提供。如您发现自己的个人信息泄密，尤其是平台用户名及密码发生泄露，请您立即联络我们客服，以便我们采取相应措施。</p>
                <p class="tit">6.免责声明</p>
                <p>除上述第3条规定属免责外，下列情况时平台亦毋需承担任何责任：</p>
                <p>（1）由于您保管疏忽，将用户密码告知他人或与他人共享注册帐户，由此导致的任何个人资料泄露。</p>
                <p>（2）由于与本平台链接的其它移动接口所造成之个人资料泄露及由此而导致的任何法律争议和后果。</p>
                <p>（3）协议双方中的任何一方，由于战争、暴乱、罢工（含内部劳工骚乱）或严重的水灾、火灾，台风和地震等自然灾害，黑客攻击、电信部门技术调整或故障、网站升级、银行方面的问题、政府行为、政策影响等非平台原因而造成的服务中断或者延迟，以及双方同意的可作为不可抗力的其他事故而影响协议执行时，则延长履行协议的期限，延长的期限相当于事故所影响的时间。因前述不可抗力导致协议再无履行可能的，协议终止，双方互不承担任何责任，相应事宜按照约定执行。</p>
                <p>（4）平台仅向您提供平台服务，您了解平台上的信息系行为人自行发布，且可能存在风险和瑕疵。平台将通过依法建立相关检查监控制度尽可能保障您在平台上的合法权益及良好体验。但鉴于平台具备存在海量信息及信息网络环境下信息与实物相分离的特点，无法逐一审查商品及/或服务的信息，无法逐一审查交易所涉及的商品及/或服务的质量、安全以及合法性、真实性、准确性，对此您应谨慎判断。您须知的还有，若因平台供应商提供的商品出现问题与您产生纠纷，全部赔偿责任应由供应商承担，但平台可配合您主张权利。</p>
                <p>平台之保护隐私声明与政策的修改及更新权均属于杭州汉高科技有限公司。</p>
            </div>
            <div class="foot">
                <div class="agreement-reject" @click="refuse">拒绝</div>
                <div class="agreement-agree" @click="agree">我已阅读并同意</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "distribute-shop-selectgoods",
    data() {
        return {
            show: true
        };
    },
    created() {},
    mounted() {},
    methods: {
        refuse() {
            this.$router.go(-1);
        },
        agree() {
            this.show = !this.show;
        },
        selectAll() {
            this.$router.push("/distribute/shop/selecttmp");
        },
        selectParts() {
            this.$router.push("/distribute/shop/selectpart");
        }
    },
    components: {},
    watch: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.container {
    background-color: #fff;
    height: 100vh;
    .title {
        font-size: 0.16rem;
        color: #333;
        padding-top: 0.25rem;
        padding-left: 0.2rem;
        font-family: "微软雅黑";
    }
    .content {
        padding: 0.1rem 0 0.2rem;
        @include flexLayout(nowrap);
        .select-all {
            padding: 0.1rem 0.2rem 0 0.35rem;
        }
        .select-part {
            padding: 0.1rem 0.35rem 0 0.2rem;
        }
        .select-goods {
            border: 0;
            color: #797979;
            @include flexLayout(nowrap, column);
            img {
                width: 100%;
                border: 0;
            }
            .select-desc {
                padding-top: 0.05rem;
                @include flexLayout(nowrap, column);
                span {
                    &:first-child {
                        font-size: 0.14rem;
                        color: #666666;
                    }
                    &:last-child {
                        font-size: 0.12rem;
                        color: #999999;
                        font-style: normal;
                    }
                }
            }
        }
    }
}
.agreement {
    width: 100vw;
    z-index: 10;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    .agreement-title {
        position: fixed;
        top: 0;
        left: 0.2rem;
        color: #333333;
        font-size: 0.14rem;
        line-height: 0.4rem;
        margin: 0;
        font-weight: bold;
        background-color: #fff;
        width: 100%;
    }
    .agreement-content {
        padding: 0 0.2rem;
        padding-top: 0.4rem;
        overflow-x: hidden;
        overflow-y: scroll;
        background-color: #fff;
        height: calc(100% - 0.6rem);
        p {
            color: #666666;
            font-size: 0.12rem;
            line-height: 0.23rem;
            margin: 0;
        }
        .tit {
            margin-top: 0.1rem;
            font-weight: bold;
        }
    }
    .foot {
        width: 100%;
        height: 0.44rem;
        position: fixed;
        bottom: 0.1rem;
        background: #fff;
        padding: 0 0.2rem 0 0.2rem;
        @include flexLayout(nowrap, row);
        div {
            height: 100%;
            margin: 0;
            padding: 0;
            border-radius: 0.22rem;
            text-align: center;
            line-height: 0.44rem;
        }
        .agreement-reject {
            flex: 2;
            margin-right: 0.2rem;
            color: #999;
            border: 1px solid #ebebeb;
        }
        .agreement-agree {
            flex: 3;
            color: #3699ff;
            border: 1px solid #3699ff;
        }
    }
}
</style>
