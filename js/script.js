
 const blogHeader = document.querySelector('.blog__header'),
        blogItem = document.querySelectorAll('.blog__item'),
        blogContainer = document.querySelectorAll('.blog__container');

        function hideBlogContainer (){
                blogContainer.forEach(item  =>{
                  item.classList.add('hide');
                  item.classList.remove('show','grid');
                });
                blogItem.forEach(item =>{
                  item.classList.remove('active');
                });
        }
        function showBlogContainer (i = 0){
              blogContainer[i].classList.add('show','grid');
              blogContainer[i].classList.remove('hide');
              blogItem[i].classList.add('active');
        }
        hideBlogContainer();
        showBlogContainer();

        blogHeader.addEventListener('click', (e) =>{
          const target = e.target;
          if(target && e.target.classList.contains('blog__item')){
            
            blogItem.forEach((item,idx) =>{
              if(item == target){
                hideBlogContainer();
                showBlogContainer(idx);
              }
            });
          }
        });
        const swiper = new Swiper('.swiper', {
          loop: true,
          autoplay:{
              delay:3000,
              disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable:true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      
        });
      
        function openNav() {
          document.getElementById("myNav").classList.toggle("menu_width")
          document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
      }