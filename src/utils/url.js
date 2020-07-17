
let DomainName, DomainT, DomainOld, DomainAll, DomainW;


if (process.env.NODE_ENV === "development") {
  DomainName = 'http://192.168.1.21:8116/Vportal/api/front'
} else {
  DomainName = 'http://192.168.1.21:8116//Vportal/api/front'
}
DomainAll = DomainName + "/api"
export default {

  //栏目树
  getCategoryTree: DomainName + "/category/tree",

  //广告位
  getAdvertisings: DomainName + "/ad",
  //站点信息
  getWebSite: DomainName + "/webSite",
  //获取文章信息
  getArticleByCategoryId: DomainName + "/article/getByCategoryId",
  //获取文章列表
  getArticleList: DomainName + "/article/list",
  //获取详情
  getArticleByArticleId: DomainName + "/article/getByArticleId",
  //申请参观
  postAppointmen: DomainName + "/appointment",






}

