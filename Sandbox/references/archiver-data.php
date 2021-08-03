

Route::get('/map-data', function(Request $request) {
    $row = [
        'recipient' => [
            'name' => 'John Smith',
            'address' => '123123 fork',
            'gps_coordinates' => [
                'lat' => 123123123,
                'lng' => 123124324
            ]
        ],
        'sender' => [
            'name' => 'John Smith',
            'address' => '123 shore lane',
            'gps_coordinates' => [
                'lat' => 123123123,
                'lng' => 123124324
            ]
        ]
    ];

    $data = [$row];

    return $data;
});