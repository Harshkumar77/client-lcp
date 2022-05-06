export default function Profile() {
  return <div className="flex flex-col justify-center items-center p-2">
    <form className="bg-white shadow-md shadow-cyan-600 rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="username"
       type="text" 
       placeholder="Username" />
    </div>
      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Date of birth">Date of birth</label>
      <input className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="date of birth"
      type="date" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="Adhaar number">Adhaar Number</label>
        <input className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Adhaar Number"
        type="number"/>
      </div>
      <div class="inline-block relative w-64">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="gender">Gender</label>
      <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
      <option>Male</option>
      <option>Female</option>
      <option>Transgender</option>
      </select>
      </div>
      <div className="p-2">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <input className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
       type="submit"/>
    </div>
      </div>
    </form>
  </div>
}
