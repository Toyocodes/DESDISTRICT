const menuBtn = document.querySelector("#menubar");
const closeBtn = document.querySelector("#close-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("mobile-menu");
});

closeBtn.addEventListener("click", function () {
  navLinks.classList.remove("mobile-menu");
});


//scroll navbar to have a background at a specific height


document.addEventListener("scroll",() =>{ 
  var header = document.querySelector(".navbar"); 

  if (window.scrollY > 0) { 
      header.classList.add ("scrolled")
      header.style.padding = '1rem 2%'
  } else {
      header.classList.remove ("scrolled")
  }
});



//INSIGHT PAGINATION

// $('#pagination-container').pagination({
//   dataSource: [1, 2, 3, ...4],
//   pageSize: 6,
//   autoHidePrevious: true,
//   autoHideNext: true,
//   callback: function(data, pagination) {
//       // template method of yourself
//       var html = template(data);
//       dataContainer.html(html);
//   }
// })

// var items = $(".insight-section .each-insight");
//     var numItems = items.length;
//     var perPage = 6;

//     items.slice(perPage).hide();

//     $('#pagination-container').pagination({
//         items: numItems,
//         itemsOnPage: perPage,
//         prevText: "&laquo;",
//         nextText: "&raquo;",
//         onPageClick: function (pageNumber) {
//             var showFrom = perPage * (pageNumber - 1);
//             var showTo = showFrom + perPage;
//             items.hide().slice(showFrom, showTo).show();
//         }
//    });