const [bookingType, setBookingType] = React.useState('round');
const selectType = React.useMemo(() => bookingType === 'oneway' ? 'date' : 'range', [bookingType]);
const bookingTypeChange = (ev) => {
    setBookingType(ev.target.value);
};
                            
<RadioGroup>
    <Radio value="round" checked={bookingType === 'round'} onChange={bookingTypeChange} label="Round trip" />
    <Radio value="oneway" checked={bookingType === 'oneway'} onChange={bookingTypeChange} label="One way" />
</RadioGroup>
<Datepicker
    controls={['calendar']}
    select={selectType}
/>