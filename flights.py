import time, datetime, warnings
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
warnings.filterwarnings("ignore")

def find_elem(by, elem, br):
    try:
        return WebDriverWait(br, 5).until(
            EC.presence_of_element_located((by, elem)))
    except:
        br.close()
        return 'Not Found!'

def rm_commas(num):
    return "".join(num.split(','))

##date string must be in YYYY-MM-DD format
def convert_to_date(date_string):
    return datetime.datetime.strptime(date_string, '%Y-%m-%d').date()

##converts date object to string i.e. Mar 2, 2018
def convert_to_string(date):
    return date.strftime("%b %d, %Y")

##dates must be in YYYY-MM-DD format
def get_flights(start_date, end_date, duration, frm, to):
    info={}
    result = ''
    start_date = convert_to_date(start_date)
    return_date = start_date + datetime.timedelta(days=duration)
    end_date = convert_to_date(end_date)
    date_incrementor = 0
    num_results = 0
    options = Options()
    options.add_argument('--headless')
    dr = '/Users/Ashhad/react/flights/chromedriver'
    br = webdriver.Chrome(dr, chrome_options=options)
    while start_date < end_date:
        flight_info={}
        start_date = start_date + datetime.timedelta(days = date_incrementor)
        return_date = start_date + datetime.timedelta(days=duration-1)
        date_incrementor = 1
        num_results+=1
        #result += (convert_to_string(start_date) + ' - ' + convert_to_string(return_date) + '\n')
        flight_info['start_date']=convert_to_string(start_date)
        flight_info['end_date']=convert_to_string(return_date)
        url = "https://www.google.com/flights/#flt=" + frm + "." + to + "." + str(start_date) + "*" + to + "." + frm + "." + str(return_date) + ";c:USD;e:1;so:1;sd:1;t:f"
        flight_info['url']=url
        br.get(url)
        price = rm_commas(find_elem(By.XPATH, '//*[@id="flt-app"]/div[2]/div[2]/div[9]/div[1]/div[2]/div[5]/div[4]/div[1]/ol/li[1]/div/div[1]/div[2]/div[1]/div[1]/div[5]/div[1]/jsl[1]/jsl', br).text.split('$')[1])
            ##in the case there are dashes in the price and cannot convert to int
        flight_info['price']=price
        info[num_results]=flight_info
    br.close()
    return info

print get_flights('2018-09-28', '2018-10-17', 4, 'ORD', 'LAX')







