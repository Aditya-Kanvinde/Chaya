
// register globally
var client = contentful.createClient({
  space: 'ze2nderueeas',
  accessToken: 'DaLJcmyfsagQctXliK5PrcydZepyCNXU6wJcJTTL4uo',
});

 Vue.component('vue-cool-lightbox', window.CoolLightBox.default)
 Vue.use(VueLazyload,{
  preLoad: 1.3,
  attempt: 1
})
const app = new Vue({
  el: '#app',
  components: {
    CoolLightBox
  },
  data() {
    return {
      items: [],
      index: null
    };
  },
  created(){
    this.getData();
  },
  methods:{
    getData(){
   client.getEntries({
     'content_type':'bridal'
   }).then((responses)=>{
     const res = responses.items
    
    res.forEach(element => {
      var image = {
        src:'https:'+ element.fields.briadalPhoto.fields.file.url,
        thumb:'https:'+ element.fields.bridalThumbnail.fields.file.url,
        height:element.fields.bridalThumbnail.fields.file.details.image.height,
        width:element.fields.bridalThumbnail.fields.file.details.image.width
      }
      this.items.push(image);
    });
    })
}
}
  })
  Vue.use(CoolLightBox)

  

 
