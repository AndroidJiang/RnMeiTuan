export default {
    weather: 'http://jisutqybmf.market.alicloudapi.com/weather/query?city=北京',
    discount: 'http://api.meituan.com/group/v1/deal/topic/discount/city/1?version_name=8.8.2&limit=7&utm_medium=android',
    banner: 'https://admobile.meituan.com/api/v3/adverts?smId=&new=0&MAC=20%3AA6%3A80%3ADF%3A49%3A02&devid=866693026442025&cityid=1&clienttp=android&app=group&AndroidID=6debce985c92588b&IMEI=866693026442025&useJungleCate=0&topic_session_id=a4b50901-0cb8-49cc-8b4b-ddd605a53d47&apptype=0&category=9999&version=8.8.2&movieid=&uid=-1&latlng=39.984362%2C116.308474&partner=0&utm_source=qq&utm_medium=android&utm_term=582&version_name=8.8.2&utm_content=866693026442025&utm_campaign=AgroupBgroupC0E0&ci=1&msid=8666930264420251515043305914&uuid=5789D239EBA0CFE0E73C1E8C5CC98E31DD64E799B1570EC6AEE02B33FB53D888&lat=39.984362&lng=116.308474&userid=-1&__reqTraceID=a9f48cb5-ef51-4496-9891-7e3636c8e9af&__skck=6a375bce8c66a0dc293860dfa83833ef&__skts=1515043744080&__skua=bcc93f8e24fdc05ba9535f5701eee027&__skno=f4647ea4-a301-4664-8422-fc30f90c65c0&__skcy=jtxwM26S7w%2FTJArtDii4fNgQ6iI%3D',


    recommend: 'http://api.meituan.com/group/v1/recommend/homepage/City/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.983497,116.318042&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind',
    searchremmond: 'http://api.meituan.com/group/v1/deal/search/hotword/city/1?mypos=39.984345%2C116.308368&uuid=DA135E22256C4D0430739F927D2EB231BA824FD037AC393C5FE3A8C3C2A1D563',


    menuInfo: [
        {title: '美食', icon: require('../img/homepage_icon_light_food_b.png')},
        {title: '电影', icon: require('../img/homepage_icon_light_movie_b.png')},
        {title: '酒店', icon: require('../img/homepage_icon_light_hotel_b.png')},
        {title: '休闲娱乐', icon: require('../img/homepage_icon_light_amusement_b.png')},
        {title: '外卖', icon: require('../img/homepage_icon_light_takeout_b.png')},

        {
            title: '休闲娱乐',
            icon: require('../img/ic_category_two.png'),
            url: 'https://i.meituan.com/specir?dest=https://h5.dianping.com/tuan/fun/play-mt/index.html&f=android&lat=39.9844&lng=116.308434&utm_source=aiwen4&utm_medium=android&utm_term=431&version_name=7.3.1&utm_content=866693026442025&utm_campaign=AgroupBgroupC0E0Ghomepage_category4_2__a1&ci=1&msid=8666930264420251516244317271&uuid=DA135E22256C4D0430739F927D2EB231BA824FD037AC393C5FE3A8C3C2A1D563&userid=-1',
        },
        {
            title: '丽人/美发',
            icon: require('../img/icon_homepage_beautyCategory.png'),
            url: 'https://i.meituan.com/beauty/node/html/mtindex.html?source=newusercoupon&f=android&lat=39.984311&lng=116.308302&utm_source=aiwen4&utm_medium=android&utm_term=431&version_name=7.3.1&utm_content=866693026442025&utm_campaign=AgroupBgroupC0E0Ghomepage_category9_22__a1&ci=1&msid=8666930264420251516244317271&uuid=DA135E22256C4D0430739F927D2EB231BA824FD037AC393C5FE3A8C3C2A1D563&userid=-1',
        },
      /*  {
            title: '旅游',
            icon: require('../img/Food/ic_category_five.png'),
            url: 'http://i.meituan.com/journey?f=android&lat=39.984322&lng=116.308408&utm_source=aiwen4&utm_medium=android&utm_term=431&version_name=7.3.1&utm_content=866693026442025&utm_campaign=AgroupBgroupC0E0Ghomepage_category10_20513__a1&ci=1&msid=8666930264420251516244317271&uuid=DA135E22256C4D0430739F927D2EB231BA824FD037AC393C5FE3A8C3C2A1D563&userid=-1',
        },*/
        {
            title: '健身',
            icon: require('../img/ic_category_eight.png'),
            url: 'http://m.dianping.com/fitness/node/html/mtindex.html?f=android&lat=39.984322&lng=116.308408&utm_source=aiwen4&utm_medium=android&utm_term=431&version_name=7.3.1&utm_content=866693026442025&utm_campaign=AgroupBgroupC0E0Ghomepage_category12_20252__a1&ci=1&msid=8666930264420251516244317271&uuid=DA135E22256C4D0430739F927D2EB231BA824FD037AC393C5FE3A8C3C2A1D563&userid=-1',
        },
        {
            title: '医疗',
            icon: require('../img/ic_category_one.png'),
            url: 'https://m.dianping.com/easylife/node/html/medicalmtindex.html?f=android&lat=39.984322&lng=116.308408&utm_source=aiwen4&utm_medium=android&utm_term=431&version_name=7.3.1&utm_content=866693026442025&utm_campaign=AgroupBgroupC0E0Ghomepage_category13_20274__a1&ci=1&msid=8666930264420251516244317271&uuid=DA135E22256C4D0430739F927D2EB231BA824FD037AC393C5FE3A8C3C2A1D563&userid=-1',
        },
        {
            title: '生活服务',
            icon: require('../img/icon_homepage_lifeServiceCategory.png'),
            url: 'https://m.dianping.com/easylife/node/html/mtindex.html?f=android&lat=39.984322&lng=116.308408&utm_source=aiwen4&utm_medium=android&utm_term=431&version_name=7.3.1&utm_content=866693026442025&utm_campaign=AgroupBgroupC0E0Ghomepage_category14_3__a1&ci=1&msid=8666930264420251516244317271&uuid=DA135E22256C4D0430739F927D2EB231BA824FD037AC393C5FE3A8C3C2A1D563&userid=-1',
        },
        {
            title: '结婚/摄影',
            icon: require('../img/ic_category_seven.png'),
            url: 'https://i.meituan.com/app/app-m-wedding-product-peon/index.html?f=android&lat=39.984322&lng=116.308408&utm_source=aiwen4&utm_medium=android&utm_term=431&version_name=7.3.1&utm_content=866693026442025&utm_campaign=AgroupBgroupC0E0Ghomepage_category15_20178__a1&ci=1&msid=8666930264420251516244317271&uuid=DA135E22256C4D0430739F927D2EB231BA824FD037AC393C5FE3A8C3C2A1D563&userid=-1',
        },
        {
            title: '母婴亲子',
            icon: require('../img/ic_category_nine.png'),
            url: 'https://i.meituan.com/baby/mobile/mt/index?f=android&lat=39.984322&lng=116.308408&utm_source=aiwen4&utm_medium=android&utm_term=431&version_name=7.3.1&utm_content=866693026442025&utm_campaign=AgroupBgroupC0E0Ghomepage_category16_20007__a1&ci=1&msid=8666930264420251516244317271&uuid=DA135E22256C4D0430739F927D2EB231BA824FD037AC393C5FE3A8C3C2A1D563&userid=-1',
        },
        {
            title: '时尚购',
            icon: require('../img/ic_category_three.png'),
            url: 'http://m.dianping.com/shopping/meituan/home?f=android&lat=39.984322&lng=116.308408&utm_source=aiwen4&utm_medium=android&utm_term=431&version_name=7.3.1&utm_content=866693026442025&utm_campaign=AgroupBgroupC0E0Ghomepage_category17_20383__a1__c20070&ci=1&msid=8666930264420251516244317271&uuid=DA135E22256C4D0430739F927D2EB231BA824FD037AC393C5FE3A8C3C2A1D563&userid=-1',
        },
        {
            title: '学习培训',
            icon: require('../img/ic_category_four.png'),
            url: 'https://i.meituan.com/education/node/html/mtchannel.html?f=android&lat=39.9844&lng=116.308434&utm_source=aiwen4&utm_medium=android&utm_term=431&version_name=7.3.1&utm_content=866693026442025&utm_campaign=AgroupBgroupC0E0Ghomepage_category18_20285__a1&ci=1&msid=8666930264420251516244317271&uuid=DA135E22256C4D0430739F927D2EB231BA824FD037AC393C5FE3A8C3C2A1D563&userid=-1',
        },
        {
            title: '家装',
            icon: require('../img/ic_category_six.png'),
            url: 'https://i.meituan.com/mtdp/jiazhuang/?f=android&lat=39.9844&lng=116.308434&utm_source=aiwen4&utm_medium=android&utm_term=431&version_name=7.3.1&utm_content=866693026442025&utm_campaign=AgroupBgroupC0E0Ghomepage_category19_20179__a1__b1244&ci=1&msid=8666930264420251516244317271&uuid=DA135E22256C4D0430739F927D2EB231BA824FD037AC393C5FE3A8C3C2A1D563&userid=-1',
        },

    ]
}
/**
 *推荐
 * @param cate 种类  1 美食   79酒店
 * @param offset 索引
 * @returns {string}
 */
export function recommendFoodUrl(cate, cityId, offset) {
    return 'http://api.meituan.com/group/v1/poi/select/cate/' + cate + '?cityId=' + cityId + '&sort=smart&coupon=all&mpt_cate1=20&mpt_cate2=79&offset=' + offset + '&limit=20';
}

export function recommendUrl(cate, offset) {
    return 'http://api.meituan.com/group/v1/poi/select/cate/' + cate + '?cityId=' + 1 + '&sort=smart&coupon=all&mpt_cate1=20&mpt_cate2=79&offset=' + offset + '&limit=20';
}


export function nearbyRecommend(poiid) {
    return 'http://api.meituan.com/group/v1/recommend/nearstoredeals/poi/' + poiid;
}
/**
 * 首页搜索
 * @param input
 * @returns {string}
 */
export function foodSearch(input) {
    return 'http://api.meituan.com/group/v1/deal/search/suggest/1?input=' + input + '&uuid=DA135E22256C4D0430739F927D2EB231BA824FD037AC393C5FE3A8C3C2A1D563';
}

export function recommendUrlWithId(id) {
    return 'http://api.meituan.com/group/v1/deal/recommend/collaborative?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=hWCwhGYpNTG7TjXWHOwPykgoKX0%3D&__skno=433ACF85-E134-4FEC-94B5-DA35D33AC753&__skts=1436343274.685593&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&cate=0&ci=1&cityId=1&client=iphone&did=' + id + '&district=-1&fields=id%2Cslug%2Cimgurl%2Cprice%2Ctitle%2Cbrandname%2Crange%2Cvalue%2Cmlls%2Csolds&hasbuy=0&latlng=0.000000%2C0.000000&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-08-15-36746&offset=0&scene=view-v4&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_i550poi_ktv__d__j___ab_i_group_5_3_poidetaildeallist__a__b___ab_gxhceshi0202__b__a___ab_pindaoquxincelue0630__b__b1___ab_i_group_5_6_searchkuang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_i550poi_xxyl__b__leftflow___ab_b_food_57_purepoilist_extinfo__a__a___ab_waimaiwending__a__a___ab_waimaizhanshi__b__b1___ab_i550poi_lr__d__leftflow___ab_i_group_5_5_onsite__b__b___ab_xinkeceshi__b__leftflowGhomepage_guess_27774127&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7'
}


export function groupPurchaseDetailWithId(id) {
    return 'http://api.meituan.com/group/v1/deal/list/id/' + id + '?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=4NDQ%2BojQ%2BZGArOWQCEgWI19Pzus%3D&__skno=803C28CE-8BA8-4831-B2DE-7BCD484348D9&__skts=1435888257.411030&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-03-09-14430&userid=10086&utm_campaign=AgroupBgroupC1080988208017226240_c0_e68cafa9e104898bb8bfcd78b64aef671D100Fab_i_group_5_3_poidetaildeallist__a__b___ab_chunceshishuju__a__a___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_waimaiwending__a__a___ab_gxh_82__nostrategy__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_pindaoshenyang__a__leftflow___ab_pindaoquxincelue0630__b__b1___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___b1junglehomepagecatesort__b__leftflow___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflowGhomepage_guess_27774127&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7'
}