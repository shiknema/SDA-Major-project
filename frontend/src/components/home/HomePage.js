import React, { Component } from "react";
import SideBar from "../layout/SideBar.js";
import coronaVirus from "./Images/corona-virus.png"
import coronaSymptoms from "./Images/coronaSymptoms.jpg"
import coronaSpreading from "./Images/coronaSpreading3.jpg"
import coronaTreatment from "./Images/coronaTreatment.jpg"
import coronaRiskGroup from "./Images/coronaRiskGroup.jpg"
import washHand from "./Images/washHand.jpeg"

class HomePage extends Component {
    render() {
        return (
        <>    
        <div className="row">
            <div className="col-12">
                <h2 class="text-center">Covid -Information</h2>
            </div>
        </div>
        <div class="row">
            <SideBar/>
 
            <div className="col-md-9">
            <div class="row mt-30">
                <div class="col-md-4 col-sm-6">
                            <div class="box3">
                                <img src={coronaVirus}/>
                                <div class="box-content">
                                    <h3 class="title">What is COVID-19</h3>
                                    <p class="description">
                                    COVID-19 is a disease caused by a new strain of coronavirus. ‘CO’ stands for corona, ‘VI’ for virus, and ‘D’ for disease. Formerly, this disease was referred to as ‘2019 novel coronavirus’ or ‘2019-nCoV.’
                                            The COVID-19 virus is a new virus linked to the same family of viruses as Severe Acute Respiratory Syndrome (SARS) and some types of common cold.
                                        </p>
                                </div>
                            </div>
                            </div>
                <div class="col-md-4 col-sm-6">
                    <div class="box3">
                        <img src={coronaSymptoms}/>
                        <div class="box-content">
                            <h3 class="title">Symptons</h3>
                            <p class="description">
                            Symptoms can include fever, cough and shortness of breath. In more severe cases, infection can cause pneumonia or breathing difficulties. More rarely, the disease can be fatal. 
                            These symptoms are similar to the flu (influenza) or the common cold, which are a lot more common than COVID-19. This is why testing is required to confirm if someone has COVID-19.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="box3">
                        <img src={coronaSpreading}/>
                        <div class="box-content">
                            <h3 class="title">How does COVID-19 spread?</h3>
                            <p class="description">
                            The virus is transmitted through direct contact with respiratory droplets of an infected person (generated through coughing and sneezing). 
                            Individuals can also be infected from and touching surfaces contaminated with the virus and touching their face (e.g., eyes, nose, mouth). 
                            The COVID-19 virus may survive on surfaces for several hours, but simple disinfectants can kill it.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
               
                <div class="row mt-30"> 
                <div class="col-md-4 col-sm-6">
                    <div class="box3">
                        <img src={coronaRiskGroup}/>
                        <div class="box-content">
                            <h3 class="title">Who is most at risk?</h3>
                            <p class="description">
                            We are learning more about how COVID-19 affects people every day.  Older people, and people with chronic medical conditions, 
                            such as diabetes and heart disease, appear to be more at risk of developing severe symptoms.  
                            As this is a new virus, we are still learning about how it affects children. 
                            We know it is possible for people of any age to be infected with the virus, 
                            but so far there are relatively few cases of COVID-19 reported among children. 
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="box3">
                        <img src={coronaTreatment}/>
                        <div class="box-content">
                            <h3 class="title">What is the treatment for COVID-19?</h3>
                            <p class="description">
                            There is no currently available vaccine for COVID-19. 
                            However, many of the symptoms can be treated and getting early care from a healthcare provider can make the disease less dangerous. 
                            There are several clinical trials that are being conducted to evaluate potential therapeutics for COVID-19.
                            </p>
                           
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="box3">
                        <img src={washHand}/>
                        <div class="box-content">
                            <h3 class="title">Precatuionary Measures?</h3>
                            <ul class="description">
                            <li>Clean your hands often using soap and water, or an alcohol-based hand rub.</li>
                            <li>Social-distancing</li>
                            <li>Don’t touch your eyes, nose or mouth.</li>
                            <li>Cover your nose and mouth when you cough or sneeze.</li>
                            <li>Stay home if you feel unwell.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
            
        </div>

            </>
               
            


        
                );
            }
}

export default HomePage;