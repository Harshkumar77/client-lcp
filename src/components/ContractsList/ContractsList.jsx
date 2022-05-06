export default function ContractsList() {
  return (
    <div className="bg-gray-100 flex flex-wrap md:px-24 justify-evenly ">
      <ContractListItem />
      <ContractListItem />
      <ContractListItem />
      <ContractListItem />
      <ContractListItem />
      <ContractListItem />
      <ContractListItem />
      <ContractListItem />
    </div>
  )
}

function ContractListItem() {
  return (
    <div className="m-4 p-4 bg-gray-200 rounded-lg animate-hover-grow">
      <img
        src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift-Dzire-Tour/8862/1646139841911/front-left-side-47.jpg?tr=h-140"
        alt="contract-image"
        className="w-[300px] aspect-square object-cover rounded-full pb-4"
        loading="lazy"
        draggable="false"
      />
      <h2 className="text-2xl text-center">Car Sale</h2>
    </div>
  )
}
