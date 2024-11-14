//your JS code here. If required.
function daysOfAYear(years){
	if(years%4==0){
		if(years%100==0){
			if(years%400==0){
				return 366;
			}
			else{
				return 365;
			}
		}
		return 366;
	}
	else return 365;
}