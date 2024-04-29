
import testPhoto from '../assets/testphoto.jpg'
import testPhoto2 from '../assets/testphoto2.jpg'

 const data = [
{"car_id":"icwAaDOmX53WiRRnLFPT237",'image': testPhoto, "price":281250,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Corolla","Year of manufacture":2004,"Colour":"Silver","Condition":"Nigerian Used","Mileage":251732,"Engine Size":1800,"Selling Condition":"Registered","Bought Condition":"Registered","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"ByZ3NlPy20arAIyrKazClUS",'image': testPhoto2,"price":5000000,"fuel type":"Petrol","gear type":"Automatic","Make":"Acura","Model":"MDX","Year of manufacture":2007,"Colour":"Green","Condition":"Foreign Used","Mileage":224589,"Engine Size":3700,"Selling Condition":"Imported","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"2zG6Mh3kyoTvWoeKHkV1oFH",'image': testPhoto,"price":7592000,"fuel type":"Petrol","gear type":"Automatic","Make":"Acura","Model":"TL","Year of manufacture":2012,"Colour":"White","Condition":"Foreign Used","Mileage":111334,"Engine Size":3500,"Selling Condition":"Imported","Bought Condition":"Imported","car":"Sedan","Trim":"SH-AWD Automatic Tech Package","Drivetrain":"All Wheel","Seats":5,"Number of Cylinders":6,"Horse Power":309,"Registered city":""},
{"car_id":"7APLHOPI93qsYK0ST4D4wB2",'image': testPhoto2,"price":9880000,"fuel type":"Petrol","gear type":"Automatic","Make":"Land Rover","Model":"Range Rover","Year of manufacture":2012,"Colour":"Gray","Condition":"Nigerian Used","Mileage":72682,"Engine Size":4000,"Selling Condition":"Registered","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"zIrIDPLd46eRQf9JFacc0e",'image': testPhoto,"price":4160000,"fuel type":"Petrol","gear type":"Automatic","Make":"Ford","Model":"Edge","Year of manufacture":2013,"Colour":"Gray","Condition":"Nigerian Used","Mileage":92118,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Registered","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"Lagos"},
{"car_id":"cXCDdfYhkTgnpxVlSqsiBWz","price":5250000,"fuel type":"Petrol","gear type":"Automatic","Make":"Acura","Model":"ZDX","Year of manufacture":2010,"Colour":"White","Condition":"Nigerian Used","Mileage":93991,"Engine Size":3700,"Selling Condition":"Registered","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"LAGOS"},
{"car_id":"3Lh1i00mSJudNaHWxOrn1L2","price":16640000,"fuel type":"Petrol","gear type":"Automatic","Make":"Lexus","Model":"GX","Year of manufacture":2011,"Colour":"Red","Condition":"Nigerian Used","Mileage":122987,"Engine Size":4800,"Selling Condition":"Registered","Bought Condition":"Registered","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"Abuja"},
{"car_id":"7ytLUCMQ5bWIly5x5EOrMdG","price":7980000,"fuel type":"Petrol","gear type":"Automatic","Make":"Lexus","Model":"GS","Year of manufacture":2013,"Colour":"Gray","Condition":"Nigerian Used","Mileage":94469,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Registered","car":"Sedan","Trim":"350","Drivetrain":"Rear Wheel","Seats":5,"Number of Cylinders":6,"Horse Power":318,"Registered city":""},
{"car_id":"fYBktHsYw4js3ZgJnHwl2zU","price":3885000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Camry","Year of manufacture":2007,"Colour":"Gold","Condition":"Foreign Used","Mileage":159726,"Engine Size":3000,"Selling Condition":"Imported","Bought Condition":"Imported","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"oK8lzkToaZZz9BklAkx1ull","price":13000000,"fuel type":"Petrol","gear type":"Automatic","Make":"Mercedes-Benz","Model":"GLK-Class","Year of manufacture":2015,"Colour":"White","Condition":"Foreign Used","Mileage":138202,"Engine Size":3500,"Selling Condition":"Imported","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"2ie9iYOamIlpP6wyVmKi3d","price":3432000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Camry","Year of manufacture":2011,"Colour":"Black","Condition":"Nigerian Used","Mileage":128048,"Engine Size":2500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"8Zxki4qLpwloj8iR2vPf2IU","price":14560000,"fuel type":"Petrol","gear type":"Automatic","Make":"Mercedes-Benz","Model":"M Class","Year of manufacture":2012,"Colour":"Blue","Condition":"Foreign Used","Mileage":329589,"Engine Size":3500,"Selling Condition":"Imported","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"aea4KMjSxWHrfT4BG9Uj36y","price":16800000,"fuel type":"Petrol","gear type":"Automatic","Make":"Mercedes-Benz","Model":"GL-Class","Year of manufacture":2015,"Colour":"White","Condition":"Nigerian Used","Mileage":56233,"Engine Size":3000,"Selling Condition":"Registered","Bought Condition":"Imported","car":"SUV","Trim":"GL450 4MATIC 4dr SUV AWD (3.0L 6cyl Turbo 7A)","Drivetrain":"All Wheel","Seats":7,"Number of Cylinders":6,"Horse Power":362,"Registered city":"LAGOS"},
{"car_id":"kl0FXS6SPkB6MriRFOWSq03","price":10500000,"fuel type":"Petrol","gear type":"Automatic","Make":"Land Rover","Model":"Range Rover Vogue","Year of manufacture":2011,"Colour":"White","Condition":"Nigerian Used","Mileage":70858,"Engine Size":4200,"Selling Condition":"Registered","Bought Condition":"Brand new","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"Lagos"},
{"car_id":"aa8nq9ZiuiVXOMzlxJdOPUK","price":3990000,"fuel type":"Diesel","gear type":"Manual","Make":"Lancia","Model":"Thesis","Year of manufacture":2007,"Colour":"White","Condition":"Foreign Used","Mileage":214524,"Engine Size":2800,"Selling Condition":"Imported","Bought Condition":"Imported","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"8wBhIzD8AlTUaM3AarS4jvN","price":9135000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"HiAce","Year of manufacture":2011,"Colour":"Silver","Condition":"Foreign Used","Mileage":31234,"Engine Size":2700,"Selling Condition":"Imported","Bought Condition":"Imported","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"kSZFKIYI0KAZDYEhk7aNvYP","price":3328000,"fuel type":"Petrol","gear type":"Automatic","Make":"Lexus","Model":"ES","Year of manufacture":2005,"Colour":"Blue","Condition":"Nigerian Used","Mileage":205914,"Engine Size":3300,"Selling Condition":"Registered","Bought Condition":"Registered","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"LAGOS"},
{"car_id":"uzW7BZeKaIdBbBdjCFG4hto","price":13520000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Camry","Year of manufacture":2018,"Colour":"Black","Condition":"Nigerian Used","Mileage":68871,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"Sedan","Trim":"L FWD (2.5L 4cyl 8AM)","Drivetrain":"Front","Seats":5,"Number of Cylinders":4,"Horse Power":203,"Registered city":"Abuja"},
{"car_id":"yx5r7XdqcyXuR6BdXsSUnqS","price":3640000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Corolla","Year of manufacture":2004,"Colour":"Black","Condition":"Foreign Used","Mileage":277779,"Engine Size":1800,"Selling Condition":"Imported","Bought Condition":"Imported","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"7v2JDzdul3aS0N2Jm3tXQVg","price":9000000,"fuel type":"Petrol","gear type":"Automatic","Make":"Land Rover","Model":"Range Rover","Year of manufacture":2012,"Colour":"Brown","Condition":"Foreign Used","Mileage":115,"Engine Size":4900,"Selling Condition":"Imported","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"41wzkRg4eLeMxN8dKr7ekvo","price":8839995,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Highlander","Year of manufacture":2010,"Colour":"Black","Condition":"Foreign Used","Mileage":138164,"Engine Size":3500,"Selling Condition":"Imported","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"ieLMYnMNQwiNKwAKTJGhaZa","price":13208000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Camry","Year of manufacture":2018,"Colour":"Gray","Condition":"Nigerian Used","Mileage":40928,"Engine Size":2500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"BqilcF2TeeV9sW57oVcIaJe","price":3120000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Highlander","Year of manufacture":2004,"Colour":"Gold","Condition":"Nigerian Used","Mileage":335734,"Engine Size":3300,"Selling Condition":"Registered","Bought Condition":"Registered","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"HorsePower":null,"Registered city":""},
{"car_id":"iMlUfnetcgD9gV83W6mX3VI","price":39900000,"fuel type":"Petrol","gear type":"Automatic","Make":"Land Rover","Model":"Range Rover","Year of manufacture":2016,"Colour":"White","Condition":"Nigerian Used","Mileage":47555,"Engine Size":3000,"Selling Condition":"Registered","Bought Condition":"Registered","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"LAGOS"},
{"car_id":"BzvzeohSKA2PjywTtWyVWWa","price":4725000,"fuel type":"Hybrid","gear type":"Automatic","Make":"Lexus","Model":"RX 400h","Year of manufacture":2006,"Colour":"Gray","Condition":"Nigerian Used","Mileage":197857,"Engine Size":3300,"Selling Condition":"Registered","Bought Condition":"Registered","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"43cFG7W0fA57MNbmR7mfTqD","price":416000,"fuel type":"Petrol","gear type":"Automatic","Make":"Acura","Model":"MDX","Year of manufacture":2008,"Colour":"Black","Condition":"Nigerian Used","Mileage":83701,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"LAGOS"},
{"car_id":"BZv2RAXvkhCkSZxHpXBuhz5","price":8840000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Highlander","Year of manufacture":2009,"Colour":"Silver","Condition":"Foreign Used","Mileage":194581,"Engine Size":3500,"Selling Condition":"Imported","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"pPg3i6nL8IqA3juwxNRLw8m","price":3640000,"fuel type":"Petrol","gear type":"Automatic","Make":"Lexus","Model":"ES","Year of manufacture":2007,"Colour":"Red","Condition":"Nigerian Used","Mileage":181974,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"LAGOS"},
{"car_id":"ppa74CfogFeD9KaU5urQ7Y3","price":4160000,"fuel type":"Petrol","gear type":"Automatic","Make":"Mercedes-Benz","Model":"M Class","Year of manufacture":2007,"Colour":"Gold","Condition":"Nigerian Used","Mileage":126048,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"SUV","Trim":"ML 350 4Matic","Drivetrain":"All Wheel","Seats":5,"Number of Cylinders":6,"Horse Power":268,"Registered city":"LAGOS"},
{"car_id":"wQaIZxTeX1HPesmV2Se9wxb","price":7360000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Tacoma","Year of manufacture":2010,"Colour":"Gray","Condition":"Nigerian Used","Mileage":105530,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"Truck","Trim":"Access Cab Automatic","Drivetrain":"Rear Wheel","Seats":4,"Number of Cylinders":4,"Horse Power":161,"Registered city":"LAGOS"},
{"car_id":"Cz8eoAXw33mrIRa6aozRCG7","price":4576000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Camry","Year of manufacture":2012,"Colour":"Red","Condition":"Nigerian Used","Mileage":300082,"Engine Size":2500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"Sedan","Trim":"LE 4dr Sedan (2.5L 4cyl 6A)","Drivetrain":"Front","Seats":5,"Number of Cylinders":4,"Horse Power":178,"Registered city":"LAGOS"},
{"car_id":"2G9QlB0tGroxxN00N9Lrp7y2","price":6152000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"RAV4","Year of manufacture":2009,"Colour":"Silver","Condition":"Foreign Used","Mileage":118256,"Engine Size":2500,"Selling Condition":"Imported","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"43cFG7We0fA57MNbmR7mfTq","price":4160000,"fuel type":"Petrol","gear type":"Automatic","Make":"Acura","Model":"MDX","Year of manufacture":2008,"Colour":"Black","Condition":"Nigerian Used","Mileage":83701,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"LAGOS"},
{"car_id":"7v2JDzdul3aS0gN2Jm3tXQg","price":9000000,"fuel type":"Petrol","gear type":"Automatic","Make":"Land Rover","Model":"Range Rover","Year of manufacture":2012,"Colour":"Brown","Condition":"Foreign Used","Mileage":115,"Engine Size":4900,"Selling Condition":"Imported","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"pPg3iP6nL8IqA3juwxNRL8m","price":3640000,"fuel type":"Petrol","gear type":"Automatic","Make":"Lexus","Model":"ES","Year of manufacture":2007,"Colour":"Red","Condition":"Nigerian Used","Mileage":181974,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"LAGOS"},
{"car_id":"3cxLmpOn5EMfwg6J9gVRO8I","price":4680000,"fuel type":"Petrol","gear type":"Automatic","Make":"Mercedes-Benz","Model":"GL-Class","Year of manufacture":2007,"Colour":"Black","Condition":"Nigerian Used","Mileage":235866,"Engine Size":4700,"Selling Condition":"Registered","Bought Condition":"Registered","car":"SUV","Trim":"GL 450","Drivetrain":"All Wheel","Seats":7,"Number of Cylinders":8,"Horse Power":335,"Registered city":""},
{"car_id":"ppa7P4CfogFeD9KaU5uQ7Y3","price":4160000,"fuel type":"Petrol","gear type":"Automatic","Make":"Mercedes-Benz","Model":"M Class","Year of manufacture":2007,"Colour":"Gold","Condition":"Nigerian Used","Mileage":126048,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"SUV","Trim":"ML 350 4Matic","Drivetrain":"All Wheel","Seats":5,"Number of Cylinders":6,"Horse Power":268,"Registered city":"LAGOS"},
{"car_id":"ksLDaKfvCRNRm5nPxMWxU0N","price":6240000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Highlander","Year of manufacture":2008,"Colour":"Gray","Condition":"Nigerian Used","Mileage":143583,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"wtFHr0JNVp2vJpOGzwHsf8B","price":10080000,"fuel type":"Petrol","gear type":"Automatic","Make":"Lexus","Model":"ES","Year of manufacture":2014,"Colour":"Black","Condition":"Foreign Used","Mileage":172741,"Engine Size":3500,"Selling Condition":"Imported","Bought Condition":"Imported","car":"Sedan","Trim":"350 FWD","Drivetrain":"Front Wheel","Seats":5,"Number of Cylinders":6,"Horse Power":268,"Registered city":""},
{"car_id":"BegKS07Z3ArvKRRg8duwLG5","price":3952000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Camry","Year of manufacture":2011,"Colour":"Gray","Condition":"Nigerian Used","Mileage":149124,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"Sedan","Trim":"XLE V6 4dr Sedan (3.5L 6cyl 6A)","Drivetrain":"Front","Seats":5,"Number of Cylinders":6,"Horse Power":268,"Registered city":"FCT"},
{"car_id":"ugK1yB7sA7sWIPiVcVpQv5i","price":4680000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Camry","Year of manufacture":2011,"Colour":"Black","Condition":"Foreign Used","Mileage":237328,"Engine Size":2400,"Selling Condition":"Imported","Bought Condition":"Imported","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"7PJ6niJkTiX41c5DiRtjg8o","price":8320000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Venza","Year of manufacture":2012,"Colour":"Brown","Condition":"Nigerian Used","Mileage":2255693,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"Crossover","Trim":"AWD","Drivetrain":"All Wheel","Seats":5,"Number of Cylinders":4,"Horse Power":185,"Registered city":"LAGOS"},
{"car_id":"z767UvewhbJyKtrjt967Oal","price":3675000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Highlander","Year of manufacture":2004,"Colour":"Gray","Condition":"Foreign Used","Mileage":210314,"Engine Size":3300,"Selling Condition":"Imported","Bought Condition":"Imported","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"nHsnrrZk5Elih2golUcyohA","price":6760000,"fuel type":"Petrol","gear type":"Automatic","Make":"Mercedes-Benz","Model":"GL-Class","Year of manufacture":2008,"Colour":"Black","Condition":"Nigerian Used","Mileage":115647,"Engine Size":4000,"Selling Condition":"Registered","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"ugK1yB7sA7sIPiPVcVpQv5i","price":4680000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Camry","Year of manufacture":2011,"Colour":"Black","Condition":"Foreign Used","Mileage":237328,"Engine Size":2400,"Selling Condition":"Imported","Bought Condition":"Imported","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"hI2ES3wPs98udEVtrFGu6WX","price":9048000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Venza","Year of manufacture":2012,"Colour":"Silver","Condition":"Foreign Used","Mileage":125117,"Engine Size":2700,"Selling Condition":"Imported","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"tVHSjZFTxeN50YuArP5bFrP","price":14560000,"fuel type":"Petrol","gear type":"Automatic","Make":"Mercedes-Benz","Model":"M Class","Year of manufacture":2014,"Colour":"Blue","Condition":"Foreign Used","Mileage":268495,"Engine Size":4600,"Selling Condition":"Imported","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"piw7bvhdxZfNXXZ0LXHWY","price":4725000,"fuel type":"Petrol","gear type":"Automatic","Make":"Lexus","Model":"ES","Year of manufacture":2007,"Colour":"Gold","Condition":"Foreign Used","Mileage":163143,"Engine Size":3500,"Selling Condition":"Imported","Bought Condition":"Imported","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"xEWXjHf6yN6uIrnLxlYz3EB","price":4200000,"fuel type":"Petrol","gear type":"Automatic","Make":"Renault","Model":"Duster","Year of manufacture":2010,"Colour":"Black","Condition":"Nigerian Used","Mileage":48294,"Engine Size":1600,"Selling Condition":"Registered","Bought Condition":"Registered","car":"SUV","Trim":"1.6","Drivetrain":"Front Wheel","Seats":5,"Number of Cylinders":4,"Horse Power":105,"Registered city":"Lagos"},
{"car_id":"jTRxBUFh3ibsfGllCY7lKg7","price":5000000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Highlander","Year of manufacture":2008,"Colour":"Black","Condition":"Nigerian Used","Mileage":117980,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Registered","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"1K6Licze875g8i1fj53b6Gu","price":6300000,"fuel type":"Petrol","gear type":"Manual","Make":"Toyota","Model":"Hilux","Year of manufacture":2012,"Colour":"White","Condition":"Nigerian Used","Mileage":189367,"Engine Size":2700,"Selling Condition":"Registered","Bought Condition":"Registered","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"koLp6xiJhHn8AzGmfwqFoNY","price":13650000,"fuel type":"Petrol","gear type":"Automatic","Make":"Mercedes-Benz","Model":"Viano","Year of manufacture":2012,"Colour":"Black","Condition":"Nigerian Used","Mileage":45933,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Brand new","car":"Van","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"LAGOS"},
{"car_id":"mWjzZkS0MiOOeITysEnCRMr","price":7140000,"fuel type":"Petrol","gear type":"Automatic","Make":"Hyundai","Model":"Creta","Year of manufacture":2016,"Colour":"Gray","Condition":"Nigerian Used","Mileage":102874,"Engine Size":1600,"Selling Condition":"Registered","Bought Condition":"Registered","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"pgoWs5MSx2zEC8a7ERkQrZ6H","price":9360000,"fuel type":"Petrol","gear type":"Automatic","Make":"Mercedes-Benz","Model":"M Class","Year of manufacture":2011,"Colour":"Gray","Condition":"Foreign Used","Mileage":90047,"Engine Size":3500,"Selling Condition":"Imported","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"9Pjv65FtvaRp4cZlMeDzXiI","price":6300000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Venza","Year of manufacture":2013,"Colour":"Brown","Condition":"Nigerian Used","Mileage":221615,"Engine Size":2700,"Selling Condition":"Registered","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"ABUJA"},
{"car_id":"eYiu6zN0FcHoQgTuTYKxJ7z","price":8840000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Tacoma","Year of manufacture":2008,"Colour":"Black","Condition":"Foreign Used","Mileage":89611,"Engine Size":4000,"Selling Condition":"Imported","Bought Condition":"Imported","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"3cxLmpOn5EMfwg6J9gVRN8I","price":4680000,"fuel type":"Petrol","gear type":"Automatic","Make":"Mercedes-Benz","Model":"GL-Class","Year of manufacture":2007,"Colour":"Black","Condition":"Nigerian Used","Mileage":235866,"Engine Size":4700,"Selling Condition":"Registered","Bought Condition":"Registered","car":"SUV","Trim":"GL 450","Drivetrain":"All Wheel","Seats":7,"Number of Cylinders":8,"Horse Power":335,"Registered city":""},
{"car_id":"65SP6utZ2P94pvJeHLtX0XL","price":6760000,"fuel type":"Petrol","gear type":"Automatic","Make":"Lexus","Model":"GX","Year of manufacture":2008,"Colour":"Blue","Condition":"Nigerian Used","Mileage":59214,"Engine Size":4500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"LAGOS"},
{"car_id":"mNK2ZFrGbPcZIihL8mPdtY2","price":11550000,"fuel type":"Petrol","gear type":"Automatic","Make":"Mercedes-Benz","Model":"M Class","Year of manufacture":2012,"Colour":"White","Condition":"Foreign Used","Mileage":340042,"Engine Size":3500,"Selling Condition":"Imported","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"yDhw8IkWdRHIpEpQng4McrN","price":12075000,"fuel type":"Petrol","gear type":"Automatic","Make":"Mercedes-Benz","Model":"GLK-Class","Year of manufacture":2015,"Colour":"Silver","Condition":"Foreign Used","Mileage":156587,"Engine Size":3500,"Selling Condition":"Imported","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"BegKS07Z3ArvKRRgmduwLG5","price":3952000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Camry","Year of manufacture":2011,"Colour":"Gray","Condition":"Nigerian Used","Mileage":149124,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"Sedan","Trim":"XLE V6 4dr Sedan (3.5L 6cyl 6A)","Drivetrain":"Front","Seats":5,"Number of Cylinders":6,"Horse Power":268,"Registered city":"FCT"},
{"car_id":"nHsnrrZk5Eliyh2glUcyohA","price":6760000,"fuel type":"Petrol","gear type":"Automatic","Make":"Mercedes-Benz","Model":"GL-Class","Year of manufacture":2008,"Colour":"Black","Condition":"Nigerian Used","Mileage":115647,"Engine Size":4000,"Selling Condition":"Registered","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"2AJzBPOEsQ8o22rOvNZiXVp","price":3952000,"fuel type":"Petrol","gear type":"Automatic","Make":"Lexus","Model":"ES","Year of manufacture":2008,"Colour":"Black","Condition":"Nigerian Used","Mileage":91444,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Registered","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"LAGOS"},
{"car_id":"uJP6DFml83zB3qkPYQUZhqv","price":5250000,"fuel type":"Petrol","gear type":"Manual","Make":"Hyundai","Model":"H1","Year of manufacture":2016,"Colour":"White","Condition":"Nigerian Used","Mileage":76961,"Engine Size":2400,"Selling Condition":"Registered","Bought Condition":"Registered","car":"Bus","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"BQravjVa56zVoBHtSUv4GKA","price":4410000,"fuel type":"Petrol","gear type":"Automatic","Make":"Lexus","Model":"GX","Year of manufacture":2003,"Colour":"Gold","Condition":"Nigerian Used","Mileage":177852,"Engine Size":4700,"Selling Condition":"Registered","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"Lagos"},
{"car_id":"upHOK6vduiV7L6W2SfLl4VX","price":3937500,"fuel type":"Petrol","gear type":"Automatic","Make":"Hyundai","Model":"Santa Fe","Year of manufacture":2013,"Colour":"Silver","Condition":"Nigerian Used","Mileage":81128,"Engine Size":2000,"Selling Condition":"Registered","Bought Condition":"Registered","car":"SUV","Trim":"Sport 2.0T","Drivetrain":"Front Wheel","Seats":5,"Number of Cylinders":4,"Horse Power":264,"Registered city":"RIVERS"},
{"car_id":"eYTiWAkCNzuiEk6tsQKLuEq","price":8112000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Highlander","Year of manufacture":2008,"Colour":"Blue","Condition":"Foreign Used","Mileage":107641,"Engine Size":3500,"Selling Condition":"Imported","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"rpZ4UW0MA4FjwtYvTtsG9Lo","price":7350000,"fuel type":"Petrol","gear type":"Automatic","Make":"Land Rover","Model":"Range Rover Evoque","Year of manufacture":2013,"Colour":"Black","Condition":"Nigerian Used","Mileage":147386,"Engine Size":2400,"Selling Condition":"Registered","Bought Condition":"Registered","car":"","Trim":"Pure Plus AWD","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"Lagos"},
{"car_id":"dlBpnCA04RPWbxo4ZAMq5K7","price":14768000,"fuel type":"Petrol","gear type":"Automatic","Make":"Lexus","Model":"IS","Year of manufacture":2015,"Colour":"Black","Condition":"Foreign Used","Mileage":117114,"Engine Size":2500,"Selling Condition":"Imported","Bought Condition":"Imported","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"tuEV1WqT1zGzCTeZlcYswtX","price":15600000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Highlander","Year of manufacture":2015,"Colour":"Blue","Condition":"Foreign Used","Mileage":126210,"Engine Size":3500,"Selling Condition":"Imported","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"avbknhyB16sXSnCfGUzctu7","price":3744000,"fuel type":"Petrol","gear type":"Automatic","Make":"Acura","Model":"MDX","Year of manufacture":2008,"Colour":"Gray","Condition":"Nigerian Used","Mileage":378349,"Engine Size":3700,"Selling Condition":"Registered","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"LAGOS"},
{"car_id":"5czUpuP1RHEgLGuCjntdtBQ","price":8984000,"fuel type":"Petrol","gear type":"Manual","Make":"Toyota","Model":"Hilux","Year of manufacture":2014,"Colour":"White","Condition":"Nigerian Used","Mileage":82115,"Engine Size":2700,"Selling Condition":"Registered","Bought Condition":"Registered","car":"Truck","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"Lagos"},
{"car_id":"dUeaG2wNmtZLbcwJDlD3bO5","price":14700000,"fuel type":"Petrol","gear type":"Automatic","Make":"Hyundai","Model":"Santa Fe","Year of manufacture":2018,"Colour":"Gray","Condition":"Nigerian Used","Mileage":4756,"Engine Size":2400,"Selling Condition":"Registered","Bought Condition":"Brand new","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"LAGOS"},
{"car_id":"mttGeZwn5juHJYMfrjdGwuI","price":17850000,"fuel type":"Petrol","gear type":"Automatic","Make":"Lexus","Model":"RC","Year of manufacture":2017,"Colour":"White","Condition":"Nigerian Used","Mileage":27287,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"Coupe","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"Lagos"},
{"car_id":"ozVsvJmkRvPq6osdoJdA14r","price":4725000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Highlander","Year of manufacture":2008,"Colour":"Black","Condition":"Nigerian Used","Mileage":119009,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"9RsrWhb7WZLIJxEKRfdcj8a","price":4160000,"fuel type":"Petrol","gear type":"Automatic","Make":"Lexus","Model":"ES","Year of manufacture":2007,"Colour":"Beige","Condition":"Nigerian Used","Mileage":161551,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"LAGOS"},
{"car_id":"tCg0t1rCXJk2UxAQNWTcquDh","price":6825000,"fuel type":"Petrol","gear type":"Automatic","Make":"Hyundai","Model":"Sonata","Year of manufacture":2018,"Colour":"Gray","Condition":"Nigerian Used","Mileage":56452,"Engine Size":2000,"Selling Condition":"Registered","Bought Condition":"Brand new","car":"Sedan","Trim":"Limited 2.0T","Drivetrain":"Front Wheel","Seats":5,"Number of Cylinders":4,"Horse Power":110,"Registered city":"LAGOS"},
{"car_id":"429yLPyXKtyoYuc2qNc9hzu","price":19760000,"fuel type":"Petrol","gear type":"Automatic","Make":"Lexus","Model":"GX","Year of manufacture":2015,"Colour":"Black","Condition":"Nigerian Used","Mileage":55940,"Engine Size":4600,"Selling Condition":"Registered","Bought Condition":"Imported","car":"SUV","Trim":"460 Base","Drivetrain":"4x4","Seats":7,"Number of Cylinders":8,"Horse Power":301,"Registered city":"LAGOS"},
{"car_id":"zrgbB9RBEkxEKaQsRVaufQa","price":3675000,"fuel type":"Petrol","gear type":"Automatic","Make":"Mercedes-Benz","Model":"C300","Year of manufacture":2008,"Colour":"Silver","Condition":"Foreign Used","Mileage":null,"Engine Size":3500,"Selling Condition":"Imported","Bought Condition":"Imported","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"yJAcVMCoaAw7XTerWZLFOv8","price":10400000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Sequoia","Year of manufacture":2008,"Colour":"Black","Condition":"Nigerian Used","Mileage":198169,"Engine Size":5700,"Selling Condition":"Registered","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"jEjN11cLFB3x1AF2bHOsua5","price":3640000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Highlander","Year of manufacture":2006,"Colour":"Silver","Condition":"Nigerian Used","Mileage":111574,"Engine Size":2400,"Selling Condition":"Registered","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"nkv65GdhFKNF0TS0YaLp1Bj","price":8320000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Highlander","Year of manufacture":2010,"Colour":"Black","Condition":"Nigerian Used","Mileage":191252,"Engine Size":3500,"Selling Condition":"Registered","Bought Condition":"Registered","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"cTY26sDgZ5yCpoTEOY3MCiy","price":4680000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Camry","Year of manufacture":2012,"Colour":"Gray","Condition":"Nigerian Used","Mileage":120486,"Engine Size":2500,"Selling Condition":"Registered","Bought Condition":"Registered","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"3Nnj5HD5D4BMQhpBuE7fllL","price":15600000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Land Cruiser Prado","Year of manufacture":2011,"Colour":"Black","Condition":"Nigerian Used","Mileage":113154,"Engine Size":2700,"Selling Condition":"Registered","Bought Condition":"Registered","car":"SUV","Trim":"2.7 i","Drivetrain":"All Wheel","Seats":5,"Number of Cylinders":4,"Horse Power":163,"Registered city":"Lagos"},
{"car_id":"fFBawkVI9D6AKOntb7kMsd2","price":4680000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Camry","Year of manufacture":2012,"Colour":"Black","Condition":"Nigerian Used","Mileage":184118,"Engine Size":2500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"hMUliKh33TLl1PrYBMF3lgP","price":3675000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"RAV4","Year of manufacture":2011,"Colour":"Black","Condition":"Nigerian Used","Mileage":121804,"Engine Size":2400,"Selling Condition":"Registered","Bought Condition":"Registered","car":"SUV","Trim":"2.5","Drivetrain":"Front Wheel","Seats":5,"Number of Cylinders":4,"Horse Power":null,"Registered city":"LAGOS"},
{"car_id":"rnUqnpT426nv2Qqh9WqmnlP","price":4620000,"fuel type":"Petrol","gear type":"Automatic","Make":"Mercedes-Benz","Model":"C-Class","Year of manufacture":2012,"Colour":"Black","Condition":"Nigerian Used","Mileage":119275,"Engine Size":null,"Selling Condition":"Registered","Bought Condition":"Registered","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":"LAGOS"},
{"car_id":"Cpk1o3z9IGeThWb6z8T1j9V","price":4680000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Camry","Year of manufacture":2012,"Colour":"Black","Condition":"Nigerian Used","Mileage":23563,"Engine Size":2500,"Selling Condition":"Registered","Bought Condition":"Imported","car":"Sedan","Trim":"LE 4dr Sedan (2.5L 4cyl 6A)","Drivetrain":"Front","Seats":5,"Number of Cylinders":4,"Horse Power":178,"Registered city":"LAGOS"},
{"car_id":"fkAp7N7u6HFM2Vts1hqDIy8","price":7350000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Venza","Year of manufacture":2009,"Colour":"Gray","Condition":"Foreign Used","Mileage":86051,"Engine Size":3500,"Selling Condition":"Imported","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"oOj4InoeDL0vLMjdTSOvL6T","price":4680000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Camry","Year of manufacture":2007,"Colour":"Gray","Condition":"Foreign Used","Mileage":105430,"Engine Size":2400,"Selling Condition":"Imported","Bought Condition":"Imported","car":"","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""},
{"car_id":"5hw06fzT8j7BUrq4AXTeFc41","price":6050000,"fuel type":"Petrol","gear type":"Automatic","Make":"Toyota","Model":"Sienna","Year of manufacture":2012,"Colour":"Gray","Condition":"Foreign Used","Mileage":59425,"Engine Size":3500,"Selling Condition":"Imported","Bought Condition":"Imported","car":"SUV","Trim":"","Drivetrain":"","Seats":null,"Number of Cylinders":null,"Horse Power":null,"Registered city":""}
	]
export default data