var postsData=require('../../data/posts-data.js')
Page({
  data: {
    imgUrls: [
      '/images/wx.png',
      '/images/iqiyi.png',
      '/images/vr.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad:function(){
    // 生命周期函数--监听页面加载1    
    this.data.postList =postsData.postList;
    this.setData({
      posts_key:postsData.postList
    });
  },
  onPostTap:function(event){
    var postId =event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: '../news/newDetail/detail?id=' + postId
    })
  }
})