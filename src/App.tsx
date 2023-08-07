import React, { useState } from 'react';
import { 
  Box,
  Button, 
  Checkbox, 
  Input, 
  Select, 
  GridContainer, 
  GridRow, 
  GridColumn, 
  Text,
  Divider,
  DatePicker,
  RadioButton
} from './island-ui/core/src';
import { 
  formContainer, 
  componentPadding, 
  flexContainer  } from './App.css'
import { bodyStyle } from './global.css.ts'; // Import the global style

export default function App() {

  const [progress, setProgress] = useState(0); // Initial progress is 0

  const handleNext = () => {
    setProgress(progress+1);
  };
  const handleBack = () => {
    setProgress(progress-1);
  };


  return (
    <>
      {bodyStyle}
      <div className={flexContainer}>
        {progress === 0 && ( // Aðili
          <GridContainer className={formContainer}>
            <GridRow>
              <GridColumn span="12/12">
                <Text as="h2" variant="h2" paddingBottom={2}>
                  Aðili
                </Text>
                <Text paddingBottom={2}>
                  Vinsamlegast settu inn kennitölu einstaklingsins til að sækja eftirfarandi upplýsingar sjálfkrafa
                </Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Input
                  label="Kennitala"
                  name="idNo"
                  placeholder="000000-0000"
                />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="6/12">
                <Checkbox
                  label="Ekki skráð kennitala"
                />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Input
                  label="Nafn"
                  name="personName"
                  placeholder=""
                />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="6/12">
                <Select
                  label="Kyn"
                  name="personGender"
                  noOptionsMessage="Enginn valmöguleiki"
                  options={[
                    {
                      label: 'Karlmaður',
                      value: '0'
                    },
                    {
                      label: 'Kvenmaður',
                      value: '1'
                    },
                    {
                      label: 'Annað',
                      value: '2'
                    }
                  ]}
                  placeholder="Veldu tegund"
                />
              </GridColumn>
              <GridColumn className={componentPadding} span="6/12">
                <Select
                  label="Ríkisfang"
                  name="select1"
                  noOptionsMessage="Enginn valmöguleiki"
                  options={[
                    {
                      label: 'Ísland',
                      value: '0'
                    },
                    {
                      label: 'Noregur',
                      value: '1'
                    },
                    {
                      label: 'Danmörk',
                      value: '2'
                    }
                  ]}
                  placeholder="Veldu tegund"
                />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="8/10">
                <Button variant="ghost">Til baka</Button>
              </GridColumn>
              <GridColumn className={componentPadding} span="2/10">
                <Button icon="arrowForward" onClick={handleNext}>Áfram</Button> 
              </GridColumn>
            </GridRow>
          </GridContainer>
        )}
        {progress === 1 && ( // Sakfærsla
          <GridContainer className={formContainer}>
            <GridRow>
              <GridColumn span="12/12">
                <Text as="h2" variant="h2" paddingBottom={2}>
                  Sakafærsla
                </Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Select
                  label="Tegund"
                  name="criminalRecordType"
                  noOptionsMessage="Enginn valmöguleiki"
                  options={[
                    {
                      label: 'Dómur',
                      value: '0'
                    },
                    {
                      label: 'Sekt',
                      value: '1'
                    },
                    {
                      label: 'Viðurlagaákvörðun',
                      value: '2'
                    },
                    {
                      label: 'Ákærufrestun',
                      value: '3'
                    }
                  ]}
                  placeholder="Veldu tegund"
                />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Text variant="h5">
                  Upplýsingar um mál
                </Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="6/12">
                <Input
                  inputMode="numeric"
                  label="Málsnúmer"
                  name="inputmode"
                  placeholder="00000000"
                />
              </GridColumn>
              <GridColumn className={componentPadding} span="6/12">
                <DatePicker
                  handleChange={function noRefCheck(){}}
                  label="Dagsetning"
                  locale="is"
                  placeholderText="Veldu dagsetningu"
                />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Select
                  label="Refsilög"
                  name="criminalLaw"
                  noOptionsMessage="Enginn valmöguleiki"
                  options={[
                    {
                      label: 'Refsilög #1',
                      value: '0'
                    },
                    {
                      label: 'Refsilög #2',
                      value: '1'
                    },
                    {
                      label: 'Refsilög #3',
                      value: '2'
                    }
                  ]}
                  placeholder="Veldu tegund"
                />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Text variant="h5">
                  Refsiákvæði
                </Text>
              </GridColumn>
              <GridColumn className={componentPadding} span="1/1">
                <Select
                  label="Refsiákvæði"
                  name="penalProvision"
                  noOptionsMessage="Enginn valmöguleiki"
                  options={[
                    {
                      label: '19/1940, 2.gr 1 málsgrein',
                      value: '0'
                    },
                    {
                      label: '19/1940, 3.gr 2 málsgrein',
                      value: '1'
                    }
                  ]}
                  placeholder="Veldu refsiákvæði"
                />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Text variant="h5">
                  Embætti
                </Text>
              </GridColumn>
              <GridColumn className={componentPadding} span="1/1">
                <Select
                  label="Embætti"
                  name="penalProvision"
                  noOptionsMessage="Enginn valmöguleiki"
                  options={[
                    {
                      label: 'Héraðsdómur Reykjavíkur',
                      value: '0'
                    },
                    {
                      label: 'Héraðsd. Í Trento, Ítalíu',
                      value: '1'
                    },
                    {
                      label: 'Héraðsdómur Austurlands',
                      value: '2'
                    }
                  ]}
                  placeholder="Veldu embætti"
                />
              </GridColumn>
            </GridRow>


            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="8/10">
                <Button variant="ghost" onClick={handleBack}>Til baka</Button>
              </GridColumn>
              <GridColumn className={componentPadding} span="2/10">
                <Button icon="arrowForward" onClick={handleNext}>Áfram</Button> 
              </GridColumn>
            </GridRow>
          </GridContainer>
        )}
        {progress === 2 && ( // Máls upplýsingar
          <GridContainer className={formContainer}>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Text as="h2" variant="h2" paddingBottom={2}>
                  Máls upplýsingar
                </Text>
                <Text paddingBottom={2}>
                  Veldu aðeins þá valkosti sem eiga við. Viðbótarskref munu birtast til að setja inn viðkomandi upplýsingar.
                </Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Checkbox
                  label="Fangelsi / Öryggigæsla"
                  large
                  subLabel="Lýsing (valfrjálst)"
                />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Checkbox
                  label="Sekt"
                  large
                  subLabel="Lýsing (valfrjálst)"
                />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="12/12">
                <Checkbox
                  label="Svipting"
                  large
                  subLabel="Lýsing (valfrjálst)"
                />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="8/10">
                <Button variant="ghost" onClick={handleBack}>Til baka</Button>
              </GridColumn>
              <GridColumn className={componentPadding} span="2/10">
                <Button icon="arrowForward" onClick={handleNext}>Áfram</Button> 
              </GridColumn>
            </GridRow>
          </GridContainer>
        )}
        {progress === 3 && ( // Fangelsi / Öryggigæsla
          <GridContainer className={formContainer}>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Text as="h2" variant="h2" paddingBottom={2}>
                  Fangelsi / Öryggigæsla
                </Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Text as="h3" variant="h3" paddingBottom={2}>
                  Hegningarauki
                </Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Checkbox
                  label="Hegningarauki / Hegningarauki að hluta"
                />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/2">
                <RadioButton
                  label="Hegningarauki"
                  large
                />
              </GridColumn>
              <GridColumn className={componentPadding} span="1/2">
                <RadioButton
                  label="Hegningarauki að hluta"
                  large
                />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn  className={componentPadding} span="1/1">
                <Text as="h3" variant="h3" paddingBottom={2}>
                  Lengd
                </Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn  className={componentPadding} span="1/1">
                <Box background="blue100" padding={3}>
                  <GridRow>
                    <GridColumn  className={componentPadding} span="5/12">
                      <Input
                        label="Lengd"
                        name="numbers"
                        placeholder="Fjöldi"
                        type="number"
                      />
                    </GridColumn>
                    <GridColumn  className={componentPadding} span="7/12">
                      <Select
                        label="Tímabil"
                        name="timeServedFirst"
                        noOptionsMessage="Enginn valmöguleiki"
                        options={[
                          {
                            label: 'mán',
                            value: '0'
                          },
                          {
                            label: 'ár',
                            value: '1'
                          },
                          {
                            label: 'dag',
                            value: '2'
                          },
                          {
                            label: 'daga',
                            value: '3'
                          },
                          {
                            label: 'ævilangt',
                            value: '4'
                          }
                        ]}
                        placeholder="Veldu tegund"
                      />
                    </GridColumn>
                    <GridColumn  className={componentPadding} span="1/1">
                      <Text as="h4" variant="h4">
                        Þar af
                      </Text>
                    </GridColumn>
                    <GridColumn  className={componentPadding} span="5/12">
                      <Input
                        label="Lengd"
                        name="numbers"
                        placeholder="Fjöldi"
                        type="number"
                      />
                    </GridColumn>
                    <GridColumn  className={componentPadding} span="7/12">
                      <Select
                        label="Tímabil"
                        name="timeServedFirst"
                        noOptionsMessage="Enginn valmöguleiki"
                        options={[
                          {
                            label: 'mán',
                            value: '0'
                          },
                          {
                            label: 'ár',
                            value: '1'
                          },
                          {
                            label: 'dag',
                            value: '2'
                          },
                          {
                            label: 'daga',
                            value: '3'
                          },
                          {
                            label: 'ævilangt',
                            value: '4'
                          }
                        ]}
                        placeholder="Veldu tegund"
                      />
                    </GridColumn>
                    <GridColumn  className={componentPadding} span="1/1">
                      <Text as="h4" variant="h4">
                        Skilorðsbundið
                      </Text>
                    </GridColumn>
                    <GridColumn  className={componentPadding} span="5/12">
                      <Input
                        label="Lengd"
                        name="numbers"
                        placeholder="Fjöldi"
                        type="number"
                      />
                    </GridColumn>
                    <GridColumn  className={componentPadding} span="7/12">
                      <Select
                        label="Tímabil"
                        name="timeServedFirst"
                        noOptionsMessage="Enginn valmöguleiki"
                        options={[
                          {
                            label: 'mán',
                            value: '0'
                          },
                          {
                            label: 'ár',
                            value: '1'
                          },
                          {
                            label: 'dag',
                            value: '2'
                          },
                          {
                            label: 'daga',
                            value: '3'
                          },
                          {
                            label: 'ævilangt',
                            value: '4'
                          }
                        ]}
                        placeholder="Veldu tegund"
                      />
                    </GridColumn>
                  </GridRow>
                </Box>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn  className={componentPadding} span="1/1">
                <Checkbox
                  label="Öryggisgæsla"
                  large
                  subLabel="Additional description, if needed"
                />
              </GridColumn>
            </GridRow>

            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="8/10">
                <Button variant="ghost" onClick={handleBack}>Til baka</Button>
              </GridColumn>
              <GridColumn className={componentPadding} span="2/10">
                <Button icon="arrowForward" onClick={handleNext}>Áfram</Button> 
              </GridColumn>
            </GridRow>
          </GridContainer>
        )}
        {progress === 4 && ( // Sekt
          <GridContainer className={formContainer}>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Text as="h2" variant="h2" paddingBottom={2}>
                  Sekt
                </Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Input
                  label="Upphæð í ISK"
                  name="Test1"
                  placeholder="0kr"
                  type="number"
                />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Checkbox
                  label="Hegningarauki"
                  large
                />
              </GridColumn>
            </GridRow>

            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="8/10">
                <Button variant="ghost" onClick={handleBack}>Til baka</Button>
              </GridColumn>
              <GridColumn className={componentPadding} span="2/10">
                <Button icon="arrowForward" onClick={handleNext}>Áfram</Button> 
              </GridColumn>
            </GridRow>
          </GridContainer>
        )}
        {progress === 5 && ( // Svipting
          <GridContainer className={formContainer}>
            <GridRow>
              <GridColumn span="1/1">
                <Text as="h2" variant="h2" paddingBottom={2}>
                  Svipting
                </Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/2">
                <RadioButton label="Ökuleyfi" backgroundColor="blue" large />
              </GridColumn>
              <GridColumn className={componentPadding} span="1/2">
                <RadioButton label="Annað" backgroundColor="blue" large />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn  className={componentPadding} span="1/1">
                <Text as="h3" variant="h3" >
                  Upphaf refsingar
                </Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <DatePicker
                  handleChange={function noRefCheck(){}}
                  label="Dagsetning"
                  locale="is"
                  placeholderText="Veldu dagsetningu"
                />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn  className={componentPadding} span="1/1">
                <Text as="h3" variant="h3" >
                  Lengd
                </Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn  className={componentPadding} span="5/12">
                        <Input
                          label="Lengd"
                          name="numbers"
                          placeholder="Fjöldi"
                          type="number"
                        />
              </GridColumn>
              <GridColumn  className={componentPadding} span="7/12">
                <Select
                  label="Tímabil"
                  name="deprivationLength"
                  noOptionsMessage="Enginn valmöguleiki"
                  options={[
                    {
                      label: 'mán',
                      value: '0'
                    },
                    {
                      label: 'ár',
                      value: '1'
                    },
                    {
                      label: 'dag',
                      value: '2'
                    },
                    {
                      label: 'daga',
                      value: '3'
                    },
                    {
                      label: 'ævilangt',
                      value: '4'
                    }
                  ]}
                  placeholder="Veldu tímabil"
                />
              </GridColumn>
            </GridRow>

            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="8/10">
                <Button variant="ghost" onClick={handleBack}>Til baka</Button>
              </GridColumn>
              <GridColumn className={componentPadding} span="2/10">
                <Button icon="arrowForward" onClick={handleNext}>Áfram</Button> 
              </GridColumn>
            </GridRow>
          </GridContainer>
        )}
        {progress === 6 && ( // Aðrar niðurstöður
          <GridContainer className={formContainer}>
            <GridRow>
              <GridColumn span="1/1">
                <Text as="h2" variant="h2" paddingBottom={2}>
                  Aðrar niðurstöður
                </Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Checkbox
                  label="Brottvísun"
                  large
                />
              </GridColumn>
              <GridColumn className={componentPadding} span="1/1">
                <Checkbox
                  label="Sýkna"
                  large
                />
              </GridColumn>
              <GridColumn className={componentPadding} span="1/1">
                <Checkbox
                  label="Frávísun"
                  large
                />
              </GridColumn>
              <GridColumn className={componentPadding} span="1/1">
                <Checkbox
                  label="Skilorðsrof"
                  large
                />
              </GridColumn>
              <GridColumn className={componentPadding} span="1/1">
                <Checkbox
                  label="Samantekt dóma"
                  large
                />
              </GridColumn>
              <GridColumn className={componentPadding} span="1/1">
                <Checkbox
                  label="Ákv. refs frestast skb."
                  large
                />
              </GridColumn>
              <GridColumn className={componentPadding} span="1/1">
                <Checkbox
                  label="Ekki sérstök refsing"
                  large
                />
              </GridColumn>
              <GridColumn className={componentPadding} span="1/1">
                <Checkbox
                  label="Erlendir dómar"
                  large
                />
              </GridColumn>
              <GridColumn className={componentPadding} span="1/1">
                <Checkbox
                  label="Dómur hæstaréttar"
                  large
                />
              </GridColumn>
            </GridRow>

            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="8/10">
                <Button variant="ghost" onClick={handleBack}>Til baka</Button>
              </GridColumn>
              <GridColumn className={componentPadding} span="2/10">
                <Button icon="arrowForward" onClick={handleNext}>Áfram</Button> 
              </GridColumn>
            </GridRow>
          </GridContainer>
        )}
        {progress === 7 && ( // Viðbótar upplýsingar
          <GridContainer className={formContainer}>
            <GridRow>
              <GridColumn span="1/1">
                <Text as="h2" variant="h2" paddingBottom={2}>
                Viðbótar upplýsingar
                </Text>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Input
                  label="Valfrjáls Texti"
                  name="extraInfo"
                  placeholder="Texti..."
                  rows={4}
                  textarea
                />
              </GridColumn>
            </GridRow>

            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="8/10">
                <Button variant="ghost" onClick={handleBack}>Til baka</Button>
              </GridColumn>
              <GridColumn className={componentPadding} span="2/10">
                <Button icon="arrowForward" onClick={handleNext}>Áfram</Button> 
              </GridColumn>
            </GridRow>
          </GridContainer>
        )}
        {progress === 8 && ( // Yfirlit
          <GridContainer className={formContainer}>
            <GridRow>
              <GridColumn span="1/1">
                <Text as="h2" variant="h2" paddingBottom={2}>
                  Yfirlit umsóknar
                </Text>
                <Text paddingBottom={2}>
                  Vinsamlegast farðu yfir gögnin hér að neðan til að staðfesta að réttar upplýsingar hafi verið gefnar upp.
                </Text>
              </GridColumn>
            </GridRow>
            
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow> {/*Aðili*/}
              <GridColumn className={componentPadding} span="1/1">
                <GridRow>
                  <GridColumn span="8/10">
                    <Text variant="h3">
                      Aðili
                    </Text>
                  </GridColumn>
                  <GridColumn span="2/10">
                    <Button size="small" variant="ghost">Breyta</Button>
                  </GridColumn>
                </GridRow>
                <GridRow>
                  <GridColumn className={componentPadding} span="1/1">
                    <Text>
                      Nafn, Kennitala, Kyn, Ríksfang
                    </Text>
                  </GridColumn>
                </GridRow>
              </GridColumn>
            </GridRow>

            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow> {/*Sakafærsla*/}
              <GridColumn className={componentPadding} span="1/1">
                <GridRow>
                  <GridColumn span="8/10">
                    <Text variant="h3">Sakafærsla</Text>
                  </GridColumn>
                  <GridColumn span="2/10">
                    <Button size="small" variant="ghost">Breyta</Button>
                  </GridColumn>
                </GridRow>
                <GridRow>

                  <GridColumn className={componentPadding} span="3/10">
                    <Text variant="h5">Tegund</Text>
                    <Text>Dómur</Text>
                  </GridColumn>
                  <GridColumn className={componentPadding} span="7/10">
                    <Text variant="h5">Málsnúmer</Text>
                    <Text>123456789</Text>
                  </GridColumn>

                  <GridColumn className={componentPadding} span="3/10">
                    <Text variant="h5">Dagsetning</Text>
                    <Text>21.06.2023</Text>
                  </GridColumn>
                  <GridColumn className={componentPadding} span="7/10">
                    <Text variant="h5">Refsilög</Text>
                    <Text>Almenn hegningarlög</Text>
                  </GridColumn>

                  <GridColumn className={componentPadding} span="3/10">
                    <Text variant="h5">Refsiákvæði</Text>
                    <Text>19/1940, 4.gr 1 málsgrein</Text>
                    <Text>19/1940, 4.gr 2 málsgrein</Text>
                    <Text>19/1940, 4.gr 3 málsgrein</Text>
                  </GridColumn>
                  <GridColumn className={componentPadding} span="7/10">
                    <Text variant="h5">Embætti</Text>
                    <Text>Héraðsdómur Reykjavíkur</Text>
                  </GridColumn>

                </GridRow>
              </GridColumn>
            </GridRow>
            
            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow> {/*Máls upplýsingar*/}
              <GridColumn className={componentPadding} span="1/1">
                <GridRow>
                  <GridColumn span="8/10">
                    <Text variant="h3">
                      Máls uppýsingar
                    </Text>
                  </GridColumn>
                  <GridColumn span="2/10">
                    <Button size="small" variant="ghost">Breyta</Button>
                  </GridColumn>
                </GridRow>
                <GridRow>
                  <GridColumn className={componentPadding} span="10/10">
                    <Text variant="h5">Máls upplýsingar</Text>
                    <Text>Fangelsi; Varðhald; Öryggisgæsla; Sket; Svipting; Upptaka;</Text>
                  </GridColumn>
                </GridRow>
              </GridColumn>
            </GridRow>

            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow> {/*Fangelsi, varðhald, öryggisgæsla*/}
              <GridColumn className={componentPadding} span="1/1">
                <GridRow>
                  <GridColumn span="8/10">
                    <Text variant="h3">
                      Fangelsi, varðhald, öryggisgæsla
                    </Text>
                  </GridColumn>
                  <GridColumn span="2/10">
                    <Button size="small" variant="ghost">Breyta</Button>
                  </GridColumn>
                </GridRow>
                <GridRow>
                <GridColumn className={componentPadding} span="3/10">
                    <Text variant="h5">Fangelsi, varðhald, öryggisgæsla</Text>
                    <Text>Fangelsi</Text>
                  </GridColumn>
                  <GridColumn className={componentPadding} span="7/10">
                    <Text variant="h5">Hegningarauki / Hegningarauki að hluta</Text>
                    <Text>Já/Nei</Text>
                  </GridColumn>
                  
                  <GridColumn className={componentPadding} span="1/1">
                    <Text variant="h5">Upphaf refsingar</Text>
                    <Text>Frá dagsetningu</Text>
                  </GridColumn>

                  <GridColumn className={componentPadding} span="3/10">
                    <Text variant="h5">Lengd</Text>
                    <Text>2 ár</Text>
                  </GridColumn>
                  <GridColumn className={componentPadding} span="7/10">
                    <Text variant="h5">Þar af</Text>
                    <Text>6 mánuðir</Text>
                  </GridColumn>

                  <GridColumn className={componentPadding} span="1/1">
                    <Text variant="h5">Skilorðsbundið</Text>
                    <Text>30 dagar</Text>
                  </GridColumn>
                </GridRow>
              </GridColumn>
            </GridRow>

            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow> {/*Sekt*/}
              <GridColumn className={componentPadding} span="1/1">
                <GridRow>
                  <GridColumn span="8/10">
                    <Text variant="h3">
                      Sekt
                    </Text>
                  </GridColumn>
                  <GridColumn span="2/10">
                    <Button size="small" variant="ghost">Breyta</Button>
                  </GridColumn>
                </GridRow>
                <GridRow>
                  <GridColumn className={componentPadding} span="3/10">
                    <Text variant="h5">Upphæð í ISK</Text>
                    <Text>1.000.000</Text>
                  </GridColumn>
                  <GridColumn className={componentPadding} span="7/10">
                    <Text variant="h5">Hegningarauki</Text>
                    <Text>Já/Nei</Text>
                  </GridColumn>
                </GridRow>
              </GridColumn>
            </GridRow>

            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow> {/*Svipting*/}
              <GridColumn className={componentPadding} span="1/1">
                <GridRow>
                  <GridColumn span="8/10">
                    <Text variant="h3">
                      Svipting
                    </Text>
                  </GridColumn>
                  <GridColumn span="2/10">
                    <Button size="small" variant="ghost">Breyta</Button>
                  </GridColumn>
                </GridRow>
                <GridRow>
                <GridColumn className={componentPadding} span="3/10">
                    <Text variant="h5">Svipting</Text>
                    <Text>Ökuleyfi</Text>
                  </GridColumn>
                  <GridColumn className={componentPadding} span="7/10">
                    <Text variant="h5">Upphaf refsingar</Text>
                    <Text>Frá dagsetningu</Text>
                  </GridColumn>

                  <GridColumn className={componentPadding} span="1/1">
                    <Text variant="h5">Lengd</Text>
                    <Text>2 ár</Text>
                  </GridColumn>
                </GridRow>
              </GridColumn>
            </GridRow>

            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow> {/*Aðrar niðurstöður*/}
              <GridColumn className={componentPadding} span="1/1">
                <GridRow>
                  <GridColumn span="8/10">
                    <Text variant="h3">
                      Aðrar niðurstöður
                    </Text>
                  </GridColumn>
                  <GridColumn span="2/10">
                    <Button size="small" variant="ghost">Breyta</Button>
                  </GridColumn>
                </GridRow>
                <GridRow>
                  <GridColumn className={componentPadding} span="10/10">
                    <Text variant="h5">Aðrar niðurstöður</Text>
                    <Text>Brottvísun; Frávísun; Skilorðsrof</Text>
                  </GridColumn>
                </GridRow>
              </GridColumn>
            </GridRow>

            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow> {/*Viðbótar upplýsingar*/}
              <GridColumn className={componentPadding} span="1/1">
                <GridRow>
                  <GridColumn span="8/10">
                    <Text variant="h3">
                      Viðbótar upplýsingar
                    </Text>
                  </GridColumn>
                  <GridColumn span="2/10">
                    <Button size="small" variant="ghost">Breyta</Button>
                  </GridColumn>
                </GridRow>
                <GridRow>
                  <GridColumn className={componentPadding} span="10/10">
                    <Text variant="h5">Viðbótar upplýsingar</Text>
                    <Text>Lorem Ipsum Texti</Text>
                  </GridColumn>
                </GridRow>
              </GridColumn>
            </GridRow>

            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow> {/*Upptaka*/}
              <GridColumn className={componentPadding} span="1/1">
                <GridRow>
                  <GridColumn span="8/10">
                    <Text variant="h3">
                      Upptaka
                    </Text>
                  </GridColumn>
                  <GridColumn span="2/10">
                    <Button size="small" variant="ghost">Breyta</Button>
                  </GridColumn>
                </GridRow>
                <GridRow>
                  <GridColumn className={componentPadding} span="10/10">
                    <Text variant="h5">Upptaka</Text>
                    <Text>Bíll; Hús;</Text>
                  </GridColumn>
                </GridRow>
              </GridColumn>
            </GridRow>

            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="8/10">
                <Button variant="ghost" onClick={handleBack}>Til baka</Button>
              </GridColumn>
              <GridColumn className={componentPadding} span="2/10">
                <Button icon="arrowForward" onClick={handleNext}>Áfram</Button> 
              </GridColumn>
            </GridRow>
          </GridContainer>
        )}
        {progress === 9 && ( // Staðfesting
          <GridContainer className={formContainer}>
            <GridRow>
              <GridColumn span="12/12">
                <Text as="h2" variant="h2" paddingBottom={2}>
                  Staðfesting
                </Text>
              </GridColumn>
            </GridRow>

            <GridRow>
              <GridColumn className={componentPadding} span="1/1">
                <Divider />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn className={componentPadding} span="8/10">
                <Button variant="ghost" onClick={handleBack}>Til baka</Button>
              </GridColumn>
              <GridColumn className={componentPadding} span="2/10">
                <Button icon="arrowForward" onClick={handleNext}>Áfram</Button> 
              </GridColumn>
            </GridRow>
          </GridContainer>
        )}
      </div>
    </>
  );
}






