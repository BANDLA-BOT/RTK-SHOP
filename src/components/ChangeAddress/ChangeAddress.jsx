import { useState } from "react";

const ChangeAddress = ({setAddress, setModelOpen}) => {
    const [ newAddress, setNewAddress] = useState('')
    const onclose = ()=>{
        setAddress(newAddress)
        setModelOpen(false)
    }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter new Address"
        className="border p-2 w0full mb-4"
        onChange={(e)=> setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2" onClick={()=>setModelOpen(false)}>
          Cancel
        </button>
        <button className="bg-blue-500 text-whitepy-2 px-4 rounded" onClick={onclose}>
          Save address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
