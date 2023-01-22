const [selectedValues, setSelectedValues] = useState([]);

handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
        setSelectedValues(selectedValues.filter(val => val !== value));
    } else {
        setSelectedValues([...selectedValues, value]);
    }
}

handleFormSubmit = () => {
    // Insert selectedValues into database
    database.transaction(tx => {
        tx.executeSql(
            'INSERT INTO my_table (checkbox_values) VALUES (?)',
            [selectedValues.join(',')],
            null,
            (_, error) => {
                console.log(error);
            }
        );
    });
}

render() {
    return (
        <View>
            <Checkbox
                value="value1"
                onChange={() => handleCheckboxChange("value1")}
            />
            <Checkbox
                value="value2"
                onChange={() => handleCheckboxChange("value2")}
            />
            <Checkbox
                value="value3"
                onChange={() => handleCheckboxChange("value3")}
            />
            <Button title="Submit" onPress={handleFormSubmit} />
        </View>
    );
}
