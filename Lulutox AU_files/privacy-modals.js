document.addEventListener('DOMContentLoaded', () => {
    const prButtons = document.querySelectorAll('.pr-btn');
    const closePrModalBtns = document.querySelectorAll('.close-pr-modal');
    const allPrModals = document.querySelectorAll('.pr-modal');
    const modalWrapper = document.querySelector('.modals-wrapper');
    const documentBody = document.querySelector('body');

    prButtons.forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();

            const termsModal = document.querySelector('.terms-modal');
            const privacyModal = document.querySelector('.privacy-modal');
            const returnsModal = document.querySelector('.returns-modal');
            const contactsModal = document.querySelector('.contacts-modal');

            modalWrapper.classList.add('active');
            documentBody.classList.add('modal-active');

            if (e.target.classList.contains('terms-btn')) {
                termsModal?.classList.add('active');
            } else if (e.target.classList.contains('privacy-btn')) {
                privacyModal?.classList.add('active');
            } else if (e.target.classList.contains('returns-btn')) {
                returnsModal?.classList.add('active');
            } else if (e.target.classList.contains('contacts-btn')) {
                contactsModal?.classList.add('active');
            }
        });
    });

    closePrModalBtns.forEach(button => {
        button.addEventListener('click', () => {
            allPrModals.forEach(modal => modal.classList.remove('active'));
            modalWrapper.classList.remove('active');
            documentBody.classList.remove('modal-active');
        });
    });
});
