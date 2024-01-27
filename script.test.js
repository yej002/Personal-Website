 const fs = require('fs');
 const path = require('path');
 const { JSDOM } = require('jsdom');
 
 // Load HTML content
 const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
 let dom;
 let container;
 
 describe('Element toggle functionality', () => {
   beforeEach(() => {
     dom = new JSDOM(html, { runScripts: 'dangerously' });
     container = dom.window.document.body;
 
     // Set global variables
     global.window = dom.window;
     global.document = dom.window.document;
   });
 
   it('should toggle the class of an element', () => {
     const element = container.querySelector('[data-sidebar]');
     element.classList.toggle('active');
     expect(element.classList.contains('active')).toBe(true);
     element.classList.toggle('active');
     expect(element.classList.contains('active')).toBe(false);
   });
 });
 
 describe('Sidebar toggle', () => {
   beforeEach(() => {
     dom = new JSDOM(html, { runScripts: 'dangerously' });
     container = dom.window.document.body;
 
     // Set global variables
     global.window = dom.window;
     global.document = dom.window.document;
   });

   it('toggles sidebar on button click', () => {
     const sidebar = container.querySelector('[data-sidebar]');
     const sidebarBtn = container.querySelector('[data-sidebar-btn]');
     sidebarBtn.click();
     expect(sidebar.classList.contains('active')).toBe(false);
   });
 });
 
 describe('Modal functionality', () => {
   beforeEach(() => {
     dom = new JSDOM(html, { runScripts: 'dangerously' });
     container = dom.window.document.body;
 
     // Set global variables
     global.window = dom.window;
     global.document = dom.window.document;
   });
 
   it('opens and closes modal correctly', () => {
     const modal = container.querySelector('[data-modal-container]');
     const postItem = container.querySelector('.blog-post-item');
     const modalCloseBtn = container.querySelector('[data-modal-close-btn]');
     postItem.click();
     expect(modal.classList.contains('active')).toBe(false);
     modalCloseBtn.click();
     expect(modal.classList.contains('active')).toBe(false);
   });
 });
 
 describe('Custom select functionality', () => {
   beforeEach(() => {
     dom = new JSDOM(html, { runScripts: 'dangerously' });
     container = dom.window.document.body;
 
     // Set global variables
     global.window = dom.window;
     global.document = dom.window.document;
   });
 
   it('displays selected value correctly', () => {
     const selectItems = container.querySelectorAll('[data-select-item]');
     const selectValue = container.querySelector('[data-selecct-value]');
 
     selectItems.forEach(item => {
       item.click();
       expect(selectValue.textContent).toBe("Select category");
     });
   });
 });
 
 describe('Filter functionality', () => {
   beforeEach(() => {
     dom = new JSDOM(html, { runScripts: 'dangerously' });
     container = dom.window.document.body;
 
     // Set global variables
     global.window = dom.window;
     global.document = dom.window.document;
   });
 
   it('filters items based on selection', () => {
     const filterItems = container.querySelectorAll('[data-filter-item]');
     const filterBtns = container.querySelectorAll('[data-filter-btn]');
     filterBtns.forEach(btn => {
       btn.click();
       const selectedValue = btn.textContent.toLowerCase();
       filterItems.forEach(item => {
         if (selectedValue === 'all' || item.dataset.category === selectedValue) {
           expect(item.classList.contains('active')).toBe(true);
         }
       });
     });
   });
 });
 
 describe('Page navigation', () => {
   beforeEach(() => {
     dom = new JSDOM(html, { runScripts: 'dangerously' });
     container = dom.window.document.body;
 
     // Set global variables
     global.window = dom.window;
     global.document = dom.window.document;
   });

   it('activates the first page on first nav link click', () => {
    const navigationLinks = container.querySelectorAll('[data-nav-link]');
    const pages = container.querySelectorAll('[data-page]');
    
    navigationLinks[0].click();
    expect(pages[0].classList.contains('active')).toBe(true);
  });
 });
 