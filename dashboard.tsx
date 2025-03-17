import React from 'react';

const PetFeederApp = () => {
  const [showAll, setShowAll] = React.useState(true);
  // Brand colors from the documents
  const colors = {
    tuntunColor1: '#603B28',
    tuntunColor2: '#B07D5C',
    tantanColor1: '#090706',
    asheColor1: '#A38466',
    asheColor2: '#6E5648',
    asheColor3: '#475B50',
    carolineColor1: '#61798D',
    carolineColor2: '#6D5E53',
    carolineColor3: '#D7C3B3',
    leleColor1: '#37524F',
    leleColor2: '#93887C',
    leleColor3: '#624F3C'
  };

  // Sample feeding data
  const feedingData = [
    { time: '6am', amount: 35 },
    { time: '12pm', amount: 65 },
    { time: '5pm', amount: 0, scheduled: true },
    { time: '9pm', amount: 0, scheduled: true }
  ];

  return (
    <div className="flex flex-col items-center w-full bg-gray-100">
      {/* Device mockup */}
      <div className="relative w-72 overflow-auto bg-white shadow-xl rounded-3xl mx-auto my-8" style={{ maxHeight: '600px' }}>
        {/* Status bar with signal icons */}
        <div className="h-6 w-full bg-gray-100 flex justify-between items-center px-4">
          <div className="text-xs font-semibold">2:07</div>
          <div className="flex items-center gap-1">
            <div className="flex space-x-1">
              <div className="h-2 w-1 bg-black rounded-sm"></div>
              <div className="h-3 w-1 bg-black rounded-sm"></div>
              <div className="h-4 w-1 bg-black rounded-sm"></div>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M1 8L12 17L23 8" stroke="black" strokeWidth="2"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="6" width="18" height="12" rx="2" stroke="black" strokeWidth="2"/>
              <rect x="7" y="10" width="10" height="4" rx="1" fill="black"/>
            </svg>
          </div>
        </div>

        {/* App header - simplified */}
        <div className="px-2 pt-2">
        </div>

        {/* Time duration and pet selector with reordered elements */}
        <div className="px-2 pt-2 pb-1">
          {/* Time duration selector - narrower height */}
          <div className="flex mb-3 px-1">
            <div className="bg-gray-100 rounded-full flex items-center text-xs w-full justify-between p-1" style={{ borderColor: colors.asheColor1 }}>
              <div className="flex-1 text-center py-1 rounded-full" style={{ backgroundColor: colors.tuntunColor1 }}>
                <span className="text-white font-medium">W</span>
              </div>
              <div className="flex-1 text-center py-1">
                <span style={{ color: colors.asheColor2 }}>M</span>
              </div>
              <div className="flex-1 text-center py-1">
                <span style={{ color: colors.asheColor2 }}>6M</span>
              </div>
              <div className="flex-1 text-center py-1 rounded-full bg-white">
                <span style={{ color: colors.asheColor2 }}>Y</span>
              </div>
            </div>
          </div>
          
          {/* Pet avatars - photo style without names */}
          <div className="flex gap-2 overflow-x-auto mb-1">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden" style={{ borderColor: colors.tuntunColor1 }}>
                <div className="w-full h-full" style={{ backgroundColor: colors.tuntunColor1 }}></div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <div className="w-full h-full" style={{ backgroundColor: colors.tantanColor1 }}></div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <div className="w-full h-full" style={{ backgroundColor: colors.asheColor1 }}></div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <div className="w-full h-full" style={{ backgroundColor: colors.carolineColor1 }}></div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <div className="w-full h-full" style={{ backgroundColor: colors.leleColor1 }}></div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ color: colors.asheColor2 }}>
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
              </div>
            </div>
          </div>
          

        </div>

        {/* Main content with narrower margins */}
        <div className="px-2 py-3">
          {/* Next feeding schedule block */}
          <div className="mb-2 bg-white rounded-xl p-3 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-bold" style={{ color: colors.tantanColor1 }}>Next Feeding</h2>
              <div className="flex gap-2">
                <div 
                  className="text-xs px-2 py-1 rounded-md flex items-center" 
                  style={{ backgroundColor: colors.leleColor1, color: 'white' }}
                >
                  <span>Feed Now</span>
                </div>
                <div 
                  className="text-xs px-2 py-1 rounded-md flex items-center" 
                  style={{ backgroundColor: colors.carolineColor3, color: colors.tuntunColor1 }}
                >
                  <span>Edit</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-2" style={{ backgroundColor: colors.carolineColor3 }}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: colors.tuntunColor1 }}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: colors.tantanColor1 }}>5:30 PM</div>
                  <div className="text-xs" style={{ color: colors.asheColor2 }}>In 2h 15m</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium" style={{ color: colors.tantanColor1 }}>60g</div>
                <div className="text-xs" style={{ color: colors.asheColor2 }}>Portion size</div>
              </div>
            </div>
            
            {/* Food consumption mini graph */}
            <div className="mt-3 pt-2 border-t" style={{ borderColor: colors.carolineColor3 }}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium" style={{ color: colors.tantanColor1 }}>Today's Consumption</span>
                <span className="text-xs" style={{ color: colors.carolineColor1 }}>180g / 240g</span>
              </div>
              <div className="h-12 w-full flex items-end">
                {feedingData.map((feed, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                    <div 
                      className={`w-5 ${feed.scheduled ? 'border border-dashed' : ''} rounded-t-sm`} 
                      style={{ 
                        height: `${feed.amount}%`,
                        backgroundColor: feed.scheduled ? 'transparent' : colors.tuntunColor1,
                        borderColor: feed.scheduled ? colors.asheColor2 : 'transparent'
                      }}
                    ></div>
                    <div className="text-xs mt-1" style={{ color: colors.asheColor2 }}>{feed.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Health monitoring */}
          <div className="mb-3 bg-white rounded-xl p-3 shadow-sm">
            <h2 className="text-sm font-bold mb-2" style={{ color: colors.tantanColor1 }}>Health Monitoring</h2>
            
            {/* Health metrics grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* Weight trend mini chart */}
              <div className="p-2 rounded-lg" style={{ backgroundColor: colors.carolineColor3 }}>
                <div className="flex justify-between text-xs mb-1">
                  <span style={{ color: colors.tantanColor1 }}>Weight</span>
                  <span style={{ color: colors.carolineColor1 }}>5.2kg</span>
                </div>
                
                {/* Mini line chart */}
                <div className="h-10 w-full relative">
                  <svg className="h-full w-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <polyline
                      points="0,15 20,12 40,8 60,10 80,7 100,10"
                      fill="none"
                      stroke={colors.tuntunColor1}
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                
                <div className="flex items-center text-xs">
                  <span className="text-xs" style={{ color: colors.asheColor2 }}>BCS: 6/9</span>
                </div>
              </div>
              
              {/* Water intake mini chart */}
              <div className="p-2 rounded-lg" style={{ backgroundColor: colors.carolineColor3 }}>
                <div className="flex justify-between text-xs mb-1">
                  <span style={{ color: colors.tantanColor1 }}>Water</span>
                  <span style={{ color: colors.carolineColor1 }}>180ml</span>
                </div>
                
                {/* Mini bar chart */}
                <div className="h-10 w-full flex items-end justify-around">
                  {[60, 70, 55, 65, 75, 60, 70].map((value, i) => (
                    <div key={i} className="h-full flex flex-col justify-end">
                      <div 
                        className="w-2 rounded-t-sm" 
                        style={{ 
                          height: `${value}%`,
                          backgroundColor: colors.carolineColor1
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-xs">
                  <span className="text-xs" style={{ color: colors.asheColor2 }}>of 250ml target</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Nutrition analysis */}
          <div className="mb-3 bg-white rounded-xl p-3 shadow-sm">
            <h2 className="text-sm font-bold mb-2" style={{ color: colors.tantanColor1 }}>Nutrition Analysis</h2>
            
            <div className="grid grid-cols-3 gap-2 mb-2">
              <div className="p-2 rounded-lg" style={{ backgroundColor: colors.carolineColor3 }}>
                <div className="text-xs font-medium" style={{ color: colors.tantanColor1 }}>Protein</div>
                <div className="text-lg font-bold" style={{ color: colors.tantanColor1 }}>38%</div>
              </div>
              <div className="p-2 rounded-lg" style={{ backgroundColor: colors.carolineColor3 }}>
                <div className="text-xs font-medium" style={{ color: colors.tantanColor1 }}>Fat</div>
                <div className="text-lg font-bold" style={{ color: colors.tantanColor1 }}>18%</div>
              </div>
              <div className="p-2 rounded-lg" style={{ backgroundColor: colors.carolineColor3 }}>
                <div className="text-xs font-medium" style={{ color: colors.tantanColor1 }}>Carbs</div>
                <div className="text-lg font-bold" style={{ color: colors.tantanColor1 }}>24%</div>
              </div>
            </div>
            
            <div className="flex justify-between text-xs">
              <span style={{ color: colors.tantanColor1 }}>Calorie Intake</span>
              <span style={{ color: colors.carolineColor1 }}>250kcal / 300kcal</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full mt-1 mb-1">
              <div className="h-2 rounded-full" style={{ backgroundColor: colors.tuntunColor1, width: '80%' }}></div>
            </div>
          </div>
        </div>

        {/* Add padding to account for tab bar */}
        <div className="pb-16"></div>
        
        {/* Tab bar */}
        <div className="fixed bottom-0 left-0 right-0 w-72 mx-auto h-16 flex items-center justify-around shadow-lg bg-white">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 mb-1">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L4 9V21H9V14H15V21H20V9L12 3Z" fill={colors.tuntunColor1} />
              </svg>
            </div>
            <span className="text-xs" style={{ color: colors.tuntunColor1, fontWeight: 'bold' }}>Feed</span>
            <div className="mt-1 h-0.5 w-6 rounded-full" style={{ backgroundColor: colors.tuntunColor1 }}></div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 mb-1">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11H4V13H20V11Z" fill={colors.asheColor2} />
                <path d="M4 18H14V16H4V18Z" fill={colors.asheColor2} />
                <path d="M4 6H14V8H4V6Z" fill={colors.asheColor2} />
                <path d="M16 6H20V8H16V6Z" fill={colors.asheColor2} />
                <path d="M19 15.5C19 14.12 17.88 13 16.5 13C15.12 13 14 14.12 14 15.5C14 16.88 15.12 18 16.5 18C17.88 18 19 16.88 19 15.5Z" fill={colors.asheColor2} />
              </svg>
            </div>
            <span className="text-xs" style={{ color: colors.asheColor2 }}>Health</span>
            <div className="mt-1 h-0.5 w-6 rounded-full" style={{ backgroundColor: 'transparent' }}></div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 mb-1">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM6 4H11V12L8.5 10.5L6 12V4Z" fill={colors.asheColor2} />
              </svg>
            </div>
            <span className="text-xs" style={{ color: colors.asheColor2 }}>Device</span>
            <div className="mt-1 h-0.5 w-6 rounded-full" style={{ backgroundColor: 'transparent' }}></div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 mb-1">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill={colors.asheColor2} />
              </svg>
            </div>
            <span className="text-xs" style={{ color: colors.asheColor2 }}>Profile</span>
            <div className="mt-1 h-0.5 w-6 rounded-full" style={{ backgroundColor: 'transparent' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetFeederApp;
