/**
 * グローバルナビのクローンを生成
 */
function setCloneNav() {
  var body = document.body;
  var globalNav = document.getElementById("js-navbar");

  if (!globalNav) return;

  var cloneNav = globalNav.cloneNode(true);
  cloneNav.id = "js-clone-nav";
  cloneNav.classList.add("clone-nav");

  body.insertBefore(cloneNav, body.firstChild);
}
setCloneNav();

/**
 * グローバルナビのクローンをページ上部に移動・固定
 */
function fixedNavbar() {
  var scrollY = window.pageYOffset;
  var trigger = document.getElementById("js-trigger");
  var cloneNav = document.getElementById("js-clone-nav");

  if (!cloneNav || !trigger) return;

  var triggerClientRect = trigger.getBoundingClientRect();
  var triggerY = scrollY + triggerClientRect.top;
  if (scrollY > triggerY) {
    cloneNav.classList.add("is-fixed-nav");
  } else {
    cloneNav.classList.remove("is-fixed-nav");
  }
}
window.addEventListener("scroll", fixedNavbar);
