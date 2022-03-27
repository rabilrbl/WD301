export default function addFormField(props: {
    fieldName: string,
    setFieldNameCB: (fieldName: string) => void,
    fieldType: string,
    setFieldTypeCB: (fieldType: string) => void,
}){
    return (
        <>
            <input
                className="bg-white border focus:outline-none py-1 px-4 focus:ring-2 focus:ring-sky-500 rounded-lg w-50 text-gray-800 transition duration-200 ease-in-out"
                type="text"
                placeholder="Field Name"
                onChange={(e) => props.setFieldNameCB(e.target.value)}
                value={props.fieldName}
              />
              <div className="relative">
                <select
                  className="bg-white pr-6 focus:outline-none border border-gray-300 rounded-lg py-1 px-4 block w-50 max-w-fit leading-normal text-gray-700"
                  name="facility"
                  value={props.fieldType}
                  onChange={(e) => props.setFieldTypeCB(e.target.value)}
                >
                  {["text", "date", "time", "color", "file", "url"].map(
                    (type, index) => (
                      <option
                        value={type}
                        className="px-4 py-2 rounded-xl border border-gray-400 focus:outline-none focus:border-gray-500"
                        key={index}
                      >
                        {type}
                      </option>
                    )
                  )}
                </select>
              </div>
        </>
    );
}