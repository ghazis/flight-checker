from flask import Flask, request, jsonify
from flask_cors import CORS
from flights import get_flights
from datetime import datetime
app = Flask(__name__)
CORS(app)

def _get_flight_info(start_date, end_date, duration, from_ap_code, to_ap_code):
    try:
        return get_flights(start_date, end_date, duration, from_ap_code, to_ap_code)
    except:
        try:
            return get_flights(start_date, end_date, duration, from_ap_code, to_ap_code)
        except:
            return 'No Flights Found!'


def convert_str_to_date(date_str):
    formatted_str = ' '.join(date_str.split(' ')[0:4])
    date = datetime.strptime(formatted_str, '%a %b %d %Y')
    return str(date.date())

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return 'Incorrect Path! Try Again!'

@app.route('/get_flight_info/')
def get_flight_info():
    from_ap_code = str(request.args.get('from_ap_code'))
    to_ap_code = str(request.args.get('to_ap_code'))
    duration = int(request.args.get('duration'))
    start_date = convert_str_to_date(str(request.args.get('start_date')))
    end_date = convert_str_to_date(str(request.args.get('end_date')))
    results = _get_flight_info(start_date, end_date, duration, from_ap_code, to_ap_code)
    return jsonify({'results': results})
if __name__ == '__main__':
    app.run(host='0.0.0.0')
