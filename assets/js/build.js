

const InstallBuildInfo = ()=>{
    const buildsItems = document.querySelectorAll('.building-item path')
    const BuildingItemAdresse = document.querySelector("#adresse")
    const BuildingItemFloor = document.querySelector("#floor")
    const BuildingItemFlats = document.querySelector("#flats")

    const BuildingItemSoldFlats = document.querySelector("#sold-flats")
    const BuildingItemActionFlats = document.querySelector('#action-flats')
    const BuildingItemReservationFlats = document.querySelector('#reservation-flats')


    buildsItems.forEach((item)=>{

        const itemFlats = item.getAttribute('data-flats')
        if (Number(itemFlats) === 0) {
            item.closest('a').classList.add("sold")
        }

        item.addEventListener('mouseover', ()=>{
            const getAttrAdresse = item.getAttribute('data-adress')
            const getAttrFloor = item.getAttribute('data-floor')
            const getAttrFlats = item.getAttribute('data-flats')

            const getSoldFlats = item.getAttribute('data-sold-flats')
            const getActionFlats = item.getAttribute('data-action-flats')
            const getReservationFlats = item.getAttribute('data-reservation-flats')

            BuildingItemAdresse.innerHTML = getAttrAdresse;
            BuildingItemFloor.innerHTML = getAttrFloor;
            BuildingItemFlats.innerHTML = getAttrFlats;
            
            BuildingItemSoldFlats.innerHTML = getSoldFlats;
            BuildingItemActionFlats.innerHTML = getActionFlats;
            BuildingItemReservationFlats.innerHTML = getReservationFlats;

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

    window.addEventListener('keydown', (event)=>{
        if (event.code == "Escape"){
            onCloseModal()
        }
        else if (event.code == "Space"){
            onCloseModal()
        }
    })


    //window.addEventListener('keydown', keyDownHandler);
    //function keyDownHandler(event) {
    //  console.log('Клавиша нажата:', event.key);
    //}
    
    
    window.onclick = (event=>{
        customModal.forEach((item)=>{
            event.target == item ? onCloseModal() : null;
        })
    })


}
document.querySelector('.modal') ? InstallModal() : null;

const InstallPositionBuildInfo = ()=>{
    const buildInfo = document.querySelector('.build-info')
    const containerBuild = document.querySelector('.container-build')
    
    function raportWindowSize(){
        const buildInfoHeight = buildInfo.offsetHeight;
        const containerBuildHeight = containerBuild.offsetHeight;
        const calcHeigh =  containerBuildHeight - buildInfoHeight - 20;

        buildInfo.style.top = calcHeigh + "px";
    }
    raportWindowSize()
    window.onresize = raportWindowSize;

}
document.querySelector('.build-info') ? InstallPositionBuildInfo() : null;


const flatAttr = [{
    id: 1,
    house: 3,
    floor: 5,
    rooms: 1,
    square: "82.3 m²",
    price: "700$",
    totalPrice: "45000$",
    flatNumber: 1,
    status: "booking",
},
{
    id: 2,
    house: 3,
    floor: 5,
    rooms: 2,
    square: "60.7 m²",
    price: "500$",
    totalPrice: "25000$",
    flatNumber: 2,
    status: "sold",
},
{
    id: 3,
    house: 3,
    floor: 5,
    rooms: 2,
    square: "60.7 m²",
    price: "600$",
    totalPrice: "30000$",
    flatNumber: 3,
    status: "free",
},
{
    id: 4,
    house: 3,
    floor: 5,
    rooms: 3,
    square: "82 m²",
    price: "800$",
    totalPrice: "51000$",
    flatNumber: 4,
    status: "action",
},
{
    id: 5,
    house: 3,
    floor: 5,
    rooms: 3,
    square: "79.7 m²",
    price: "750$",
    totalPrice: "46000$",
    flatNumber: 5,
    status: "booking",
},
{
    id: 6,
    house: 3,
    floor: 5,
    rooms: 1,
    square: "39.2 m²",
    price: "400$",
    totalPrice: "35000$",
    flatNumber: 6,
    status: "action",
},
{
    id: 7,
    house: 3,
    floor: 5,
    rooms: 1,
    square: "42 m²",
    price: "420$",
    totalPrice: "36000$",
    flatNumber: 7,
    status: "sold",
},
{
    id: 8,
    house: 3,
    floor: 5,
    rooms: 1,
    square: "39.2 m²",
    price: "400$",
    totalPrice: "35000$",
    flatNumber: 8,
    status: "booking",
},
{
    id: 9,
    house: 3,
    floor: 5,
    rooms: 3,
    square: "79.3 m²",
    price: "750$",
    totalPrice: "55000$",
    flatNumber: 9,
    status: "free",
},
]



window.addEventListener('load', function(){

    function InstallFloorPlan(){
        const flats = document.querySelectorAll('.flat')
        const flatInfo = document.querySelector('.flat-info')

        const flatObj = [{
            id: 1,
            house: 3,
            floor: 5,
            rooms: 1,
            square: "82.3 m²",
            price: "700$",
            totalPrice: "45000$",
            flatNumber: 3,
            status: "booking",
        }];

        const renderInfo = (array)=>{
            const flatInformation = array.map((item) =>{
                return `
                    <div class="flat-item">
                        Номер дома: ${item.house}
                    </div>
                    <div class="flat-item">
                        Поверх: ${item.floor}
                    </div>
                    <div class="flat-item">
                        К-ть Кімнат: ${item.rooms}
                    </div>
                    <div class="flat-item">
                        Площа: ${item.square}
                    </div>
                    <div class="flat-item">
                        Ціна за м²: ${item.price}
                    </div>
                    <div class="flat-item">
                        Ціна: ${item.totalPrice}
                    </div>
                    <div class="flat-item">
                        Номер квартири: ${item.flatNumber}
                    </div>
                    <div class="flat-item">
                        Статус: ${item.status}
                    </div>
                `;
            })
            flatInfo.innerHTML = flatInformation;
        };
        renderInfo(flatObj);
        const classRemoveActive = ()=> flats.forEach((item) =>{
            item.classList.remove('active')
        });

        flats.forEach((flat) =>{

            flat.addEventListener('click', ()=>{
                classRemoveActive();
                flat.classList.add('active');

                const thisFlat = flat.getAttribute('data-flat');
                const flatNumber = flatAttr.filter(
                    (item) => item.flatNumber === Number(thisFlat),
                );
                renderInfo(flatNumber);
            });


            if(flat.classList.contains('booking')){
                flat.querySelector('.flat-status').innerHTML = "Бронь";
            }
            else if(flat.classList.contains('sold')){
                flat.querySelector('.flat-status').innerHTML = "Продана";
            }
            else if(flat.classList.contains('action')){
                flat.querySelector('.flat-status').innerHTML = "Акция"
            }
            else {
                flat.querySelector('.flat-status').innerHTML = "Свободна";
            }
        });
    }

    document.querySelector('.floor-page') ? InstallFloorPlan() : null;
});
