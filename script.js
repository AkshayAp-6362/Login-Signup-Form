const toggle = document.getElementById('toggle');
const formTitle = document.getElementById('form-title');
const form = document.getElementById('form');

let isLogin = true;

toggle.addEventListener('click', () => {
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? 'Login' : 'Sign Up';
  toggle.textContent = isLogin ? 'Sign up' : 'Login';
});
