document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.burger-button');
  const btnImage = document.querySelector('.burger');
  const hero = document.querySelector('.nav');

  const topLine = btn.querySelector('.top');
  const bottomLine = btn.querySelector('.bottom');

  const btnSub = document.querySelector('.sub-arrow');
  const subArea = document.querySelector('.submenu');

  if (btn) {
    btn.addEventListener('click', () => {
      hero.classList.toggle('expanded');
      btnImage.classList.toggle('expanded');

      const expanded = btnImage.classList.contains('expanded');

      if (expanded) {
        topLine.setAttribute('x', '0');
        topLine.setAttribute('y', '8');
        topLine.setAttribute('width', '32');
        topLine.setAttribute('height', '3');

        bottomLine.setAttribute('x', '0');
        bottomLine.setAttribute('y', '24');
        bottomLine.setAttribute('width', '32');
        bottomLine.setAttribute('height', '3');
        bottomLine.setAttribute('height', '3');

        topLine.setAttribute('transform', 'rotate(45 16 16)'); // 16,16 — центр viewBox 32x32
        bottomLine.setAttribute('transform', 'rotate(-45 16 16)');
      } else {
        topLine.setAttribute('x', '0');
        topLine.setAttribute('y', '8');
        topLine.setAttribute('width', '32');
        topLine.setAttribute('height', '3');

        bottomLine.setAttribute('x', '8');
        bottomLine.setAttribute('y', '20');
        bottomLine.setAttribute('width', '24');
        bottomLine.setAttribute('height', '3');

        topLine.removeAttribute('transform');
        bottomLine.removeAttribute('transform');
      }
    });
  }

  if (btnSub) {
    btnSub.addEventListener('click', () => {
      btnSub.classList.toggle('expanded');
      subArea.classList.toggle('expanded');

      if (!btnSub.classList.contains('expanded')) {
        subArea.style.maxHeight = '0';
      } else {
        subArea.style.maxHeight = subArea.scrollHeight + 'px';
      }
    });
  }

  const collapseBtn = document.querySelector('.ranking .collapse__button');
  const collapseText = document.querySelector('.ranking .collapse__text');

  collapseBtn.addEventListener('click', () => {
    collapseText.classList.toggle('expanded');

    if (collapseText.classList.contains('expanded')) {
      collapseBtn.textContent = 'show less';
    } else {
      collapseBtn.textContent = 'show more';
    }
  });

  // document.querySelectorAll(".nav .has-sub > a").forEach((item) => {
  //     item.addEventListener("click", (e) => {
  //         e.preventDefault();
  //         item.parentElement.classList.toggle("open");
  //     });
  // });
});
