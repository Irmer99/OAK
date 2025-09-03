// dismiss offcanvas when a tab is clicked (for mobile) on menu.html
      let offcanvasElement = document.getElementById('offcanvasExample');
      let offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);
      let offcanvasTabList = document.querySelectorAll('#offcanvasExample .nav-link');

      offcanvasTabList.forEach(function (triggerEl) {
        triggerEl.addEventListener('click', function (event) {
          offcanvas.hide();
        });
      });



// Scroll to top when a tab is shown
      // let triggerTabList = [].slice.call(document.querySelectorAll('#nav-tab a'))
      // triggerTabList.forEach(function (triggerEl) {
      //   let tabTrigger = new bootstrap.Tab(triggerEl)

      //   triggerEl.addEventListener('shown.bs.tab', function (event) {
      //     // Scroll to top of the tab content
      //     document.getElementById('nav-tabContent').scrollIntoView();
      //   })
      // })

      let triggerTabList = [].slice.call(document.querySelectorAll('#nav-tab a'))
      triggerTabList.forEach(function (triggerEl) {
        triggerEl.addEventListener('shown.bs.tab', function (event) {
          // Scroll to top of the tab content
          document.getElementById('nav-tabContent').scrollIntoView({behavior: 'smooth'});
        })
      })
      

      
       


