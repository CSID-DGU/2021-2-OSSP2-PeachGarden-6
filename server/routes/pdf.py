import sys
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm
import json
import sys

def pdf(args):
    data = json.loads(args)
    coordinateList = data['coordinateList']
    markerList = json.loads(data['markerList'])
    playerGamesList = np.array(coordinateList['x'])
    warList = np.array(coordinateList['y'])

    xTarget = np.array(markerList['x'])
    yTarget = np.array(markerList['y'])

    playerGamesList.sort() 
    y = 0
    if xTarget.size == 3:
        y=norm.pdf(playerGamesList,xTarget[2],xTarget[2]/5) 
    else :
        y=norm.pdf(playerGamesList,xTarget[1],xTarget[1]/5) 
    # 평균 0, 표준편차 1 
    plt.plot(playerGamesList, y, color='black', linestyle='-') 
    plt.axvline(x=xTarget[0], color='blue', linestyle='--')
    plt.axvline(x=xTarget[1], color='orange', linestyle='--')
    if xTarget.size == 3:
        plt.axvline(x=xTarget[2], color='green', linestyle='--')
    plt.fill_between(playerGamesList, y,
    interpolate=True, color='white', alpha=0.5)
    plt.savefig('public/images/pdf_player_games.png', bbox_inches='tight')
    
    plt.clf()

    warList.sort() 
    if xTarget.size == 3:
        y=norm.pdf(warList,yTarget[2],1) 
    else :
        y=norm.pdf(warList,yTarget[1],1) 
    # 평균 0, 표준편차 1 
    plt.plot(warList, y, color='black', linestyle='-')
    plt.axvline(x=yTarget[0], color='blue', linestyle='--')
    plt.axvline(x=yTarget[1], color='orange', linestyle='--')
    if xTarget.size == 3:
        plt.axvline(x=yTarget[2], color='green', linestyle='--')
    plt.fill_between(warList, y,
    interpolate=True, color='white', alpha=0.5)
    plt.savefig('public/images/pdf_war.png', bbox_inches='tight')
    sys.exit()

if __name__ == '__main__':
    pdf(sys.argv[1])