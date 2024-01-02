

const InstallBuildInfo = ()=>{
    const buildsItems = document.querySelectorAll('.building-item path')
    const BuildingItemAdresse = document.querySelector("#adresse")
    const BuildingItemFloor = document.querySelector("#floor")
    const BuildingItemFlats = document.querySelector("#flats")


    buildsItems.forEach((item)=>{

        const itemFlats = item.getAttribute('data-flats')
        if (Number(itemFlats) === 0) {
            item.closest('a').classList.add("sold")
        }

        item.addEventListener('mouseover', ()=>{
            const getAttrAdresse = item.getAttribute('data-adress')
            const getAttrFloor = item.getAttribute('data-floor')
            const getAttrFlats = item.getAttribute('data-flats')

            BuildingItemAdresse.innerHTML = getAttrAdresse;
            BuildingItemFloor.innerHTML = getAttrFloor;
            BuildingItemFlats.innerHTML = getAttrFlats;

        })

        item.addEventListener('click', (event) => {
            if (item.closest(".sold")){
                event.preventDefault();
            }
        })

        const SoldItem = document.querySelectorAll('.sold');
        SoldItem.forEach((sold, index) =>{
            sold.setAttribute('data-modal', 'modal-' + index)
        });
    });

    
}
document.querySelector('.build-info') ? InstallBuildInfo() : null;

function InstallModal(){
    const callModalButton = document.querySelectorAll('[data-modal]');
    const customModal = document.querySelectorAll('.modal');
    const closeModal = document.querySelectorAll('.modal-close');

    const Body = document.querySelector('body')

    customModal.forEach((modal, index) =>{
        modal.setAttribute('id', 'modal-' + index);
    });
    callModalButton.forEach((call, index) =>{
        call.addEventListener('click', () =>{
            const callModal = document.querySelector('#modal-' + index);
            callModal.style.display ='flex';
            callModal.classList.add("show-modal");
        });
    });

    closeModal.forEach((closeButton) =>{
        closeButton.addEventListener('click', onCloseModal)
    })

    function onCloseModal() {
        const openModal = document.querySelector('.show-modal');
        openModal.classList.remove('show-modal');
        openModal.style.display = 'none';
    }


}
document.querySelector('.modal') ? InstallModal() : null;