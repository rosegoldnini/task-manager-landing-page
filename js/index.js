// Industry Accordion
document.addEventListener('DOMContentLoaded', () => {
  const industryContainer = document.querySelector('.industry-content');

  industryContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.industry-group-header');
    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.industry-group-body');
    const icon = groupHeader.querySelector('i');

    // Toggle icon and body
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');
    groupBody.classList.toggle('open');

    // Close other open groups
    document.querySelectorAll('.industry-group').forEach((otherGroup) => {
      if (otherGroup !== group) {
        otherGroup.querySelector('.industry-group-body').classList.remove('open');
        otherGroup.querySelector('.industry-group-header i').classList.replace('fa-minus', 'fa-plus');
      }
    });
  });
});