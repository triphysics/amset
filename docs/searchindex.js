Search.setIndex({docnames:["amset","amset.interpolation","amset.misc","amset.scattering","changelog","contributing","contributors","example_settings","index","installation","license","modules","references","scattering","settings","theory","using"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:55},filenames:["amset.rst","amset.interpolation.rst","amset.misc.rst","amset.scattering.rst","changelog.rst","contributing.rst","contributors.rst","example_settings.rst","index.rst","installation.rst","license.rst","modules.rst","references.rst","scattering.rst","settings.rst","theory.rst","using.rst"],objects:{"":{amset:[0,0,0,"-"]},"amset.cli":{main:[0,1,1,""]},"amset.data":{AmsetData:[0,2,1,""]},"amset.data.AmsetData":{calculate_dos:[0,3,1,""],set_doping_and_temperatures:[0,3,1,""],set_extra_kpoints:[0,3,1,""],set_scattering_rates:[0,3,1,""],to_file:[0,3,1,""]},"amset.dos":{FermiDos:[0,2,1,""]},"amset.dos.FermiDos":{as_dict:[0,3,1,""],from_dict:[0,4,1,""],get_doping:[0,3,1,""],get_fermi:[0,3,1,""],get_fermi_interextrapolated:[0,3,1,""]},"amset.interpolation":{densify:[1,0,0,"-"],interpolate:[1,0,0,"-"],voronoi:[1,0,0,"-"]},"amset.interpolation.densify":{BandDensifier:[1,2,1,""],fibonacci_sphere:[1,1,1,""],sunflower_sphere:[1,1,1,""]},"amset.interpolation.densify.BandDensifier":{densify:[1,3,1,""]},"amset.interpolation.interpolate":{DFTData:[1,2,1,""],Interpolater:[1,2,1,""]},"amset.interpolation.interpolate.DFTData":{get_lattvec:[1,3,1,""]},"amset.interpolation.interpolate.Interpolater":{get_amset_data:[1,3,1,""],get_dos:[1,3,1,""],get_energies:[1,3,1,""],get_line_mode_band_structure:[1,3,1,""]},"amset.interpolation.voronoi":{PeriodicVoronoi:[1,2,1,""]},"amset.interpolation.voronoi.PeriodicVoronoi":{compute_volumes:[1,3,1,""]},"amset.misc":{constants:[2,0,0,"-"],log:[2,0,0,"-"],util:[2,0,0,"-"]},"amset.misc.log":{WrappingFormatter:[2,2,1,""],initialize_amset_logger:[2,1,1,""],log_banner:[2,1,1,""],log_list:[2,1,1,""],log_time_taken:[2,1,1,""]},"amset.misc.log.WrappingFormatter":{format:[2,3,1,""]},"amset.misc.util":{cast_dict:[2,1,1,""],create_shared_array:[2,1,1,""],df0de:[2,1,1,""],f0:[2,1,1,""],gen_even_slices:[2,1,1,""],groupby:[2,1,1,""],kpoints_to_first_bz:[2,1,1,""],load_settings_from_file:[2,1,1,""],parse_deformation_potential:[2,1,1,""],parse_doping:[2,1,1,""],parse_temperatures:[2,1,1,""],tensor_average:[2,1,1,""],unicodeify_spacegroup:[2,1,1,""],validate_settings:[2,1,1,""],write_settings_to_file:[2,1,1,""]},"amset.run":{AmsetRunner:[0,2,1,""]},"amset.run.AmsetRunner":{from_directory:[0,5,1,""],from_vasprun:[0,5,1,""],from_vasprun_and_settings:[0,5,1,""],run:[0,3,1,""],write_settings:[0,3,1,""]},"amset.scattering":{calculate:[3,0,0,"-"],elastic:[3,0,0,"-"],inelastic:[3,0,0,"-"]},"amset.scattering.calculate":{ScatteringCalculator:[3,2,1,""],calculate_g:[3,1,1,""],get_band_rates:[3,1,1,""],get_ir_band_rates:[3,1,1,""],scattering_worker:[3,1,1,""],w0gauss:[3,1,1,""]},"amset.scattering.calculate.ScatteringCalculator":{calculate_band_rates:[3,3,1,""],calculate_scattering_rates:[3,3,1,""],elastic_scatterers:[3,6,1,""],get_scatterers:[3,5,1,""],inelastic_scatterers:[3,6,1,""],scatterer_labels:[3,6,1,""]},"amset.scattering.elastic":{AbstractElasticScattering:[3,2,1,""],AcousticDeformationPotentialScattering:[3,2,1,""],IonizedImpurityScattering:[3,2,1,""],PiezoelectricScattering:[3,2,1,""]},"amset.scattering.elastic.AbstractElasticScattering":{factor:[3,3,1,""],prefactor:[3,3,1,""]},"amset.scattering.elastic.AcousticDeformationPotentialScattering":{factor:[3,3,1,""],name:[3,6,1,""],prefactor:[3,3,1,""],required_properties:[3,6,1,""]},"amset.scattering.elastic.IonizedImpurityScattering":{factor:[3,3,1,""],name:[3,6,1,""],prefactor:[3,3,1,""],required_properties:[3,6,1,""]},"amset.scattering.elastic.PiezoelectricScattering":{factor:[3,3,1,""],name:[3,6,1,""],prefactor:[3,3,1,""],required_properties:[3,6,1,""]},"amset.scattering.inelastic":{AbstractInelasticScattering:[3,2,1,""],PolarOpticalScattering:[3,2,1,""]},"amset.scattering.inelastic.AbstractInelasticScattering":{factor:[3,3,1,""],prefactor:[3,3,1,""]},"amset.scattering.inelastic.PolarOpticalScattering":{factor:[3,3,1,""],name:[3,6,1,""],prefactor:[3,3,1,""],required_properties:[3,6,1,""]},"amset.transport":{ADOS:[0,1,1,""],AMSETDOS:[0,1,1,""],TransportCalculator:[0,2,1,""]},"amset.transport.TransportCalculator":{solve_bte:[0,3,1,""]},amset:{cli:[0,0,0,"-"],data:[0,0,0,"-"],dos:[0,0,0,"-"],interpolation:[1,0,0,"-"],misc:[2,0,0,"-"],run:[0,0,0,"-"],scattering:[3,0,0,"-"],transport:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","classmethod","Python class method"],"5":["py","staticmethod","Python static method"],"6":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:classmethod","5":"py:staticmethod","6":"py:attribute"},terms:{"1e13":14,"1e14":14,"1e15":[7,14],"1e16":[7,14],"1e17":7,"1e18":7,"1e19":7,"1e20":[7,14],"1e21":7,"1x3":1,"20e":16,"39e":16,"3x3":1,"46e":16,"72e":16,"86e":16,"99e":16,"case":[13,14,15,16],"class":[0,1,2,3],"default":[0,2,7,14,16],"final":15,"float":[0,1,2],"fr\u00f6hlich":12,"function":[0,1,10,13,14,15],"import":16,"int":[0,1,2,13,15],"new":[0,5,12],"null":7,"return":[0,1,2,3],"static":[0,3,13,14],"true":[0,1,3,7],AND:10,ARE:10,BUT:10,DIS:7,DOS:[0,15],Dos:[0,1],FOR:10,For:[1,2,13,14,16],Has:[1,14],NOT:10,Not:14,PRs:5,SUCH:10,THE:10,THe:0,The:[0,1,2,5,7,8,9,10,13,14,15,16],USE:10,Use:5,Using:8,Will:[0,14],_suggest_nbin:0,a_factor:3,abbrevi:13,abc:3,about:[0,8,13],abov:[10,13],abs:0,absenc:15,absolut:[2,5],absorpt:[13,15],abstractelasticscatt:3,abstractinelasticscatt:3,academ:12,accept:[0,5,14],acceptor:[12,14],acceptor_charg:[3,7],access:13,accord:[2,13,15],accordingli:[9,15],account:13,accur:[8,15],accuraci:[0,1,7,14],acd:[3,7,13,14],achiev:[13,15],acoust:[8,14],acousticdeformationpotentialscatt:3,across:1,actual:5,adapt:5,add:[0,14],added:[2,7,8,13,14],adding:0,addit:[8,14,15],adjust:1,ado:0,adv:12,advis:10,affect:[7,14,15],agreement:10,aim:8,alex:6,algorithm:0,alireza:6,all:[0,1,2,5,7,8,10,13,14,16],allow:16,along:[1,16],alpha:15,also:[0,1,13,14],altern:[1,14],amen:8,amount:[1,14],amset:[6,7,10,13,14],amset_data:[0,1,3],amset_set:14,amsetdata:[0,1,3],amsetdo:0,amsetrun:0,amsetrunn:[0,16],angl:[13,15],angstrom:7,ani:[0,1,2,5,10,14,16],anubhav:6,anyon:10,api:14,append:2,appli:14,applic:12,approv:10,approxim:[8,13,14,15],area:[5,8],arg:2,argument:0,aris:10,around:0,arrai:[0,1],art:8,artifici:14,as_dict:0,associ:0,assumpt:0,atom:1,atomic_unit:1,attribut:2,auto:[0,3,7,14],autogener:8,automat:[0,1,5,7,14],auxiliari:0,avail:[0,1,8,10,16],averag:14,avoid:5,b_idx:3,back:0,background:5,ball_tre:3,band:[0,1,7,8,13,14,15,16],band_structur:[0,1],banddensifi:1,bandgap:[0,1,7],bandstructur:1,bandstructuresymmlin:1,bardeen:[12,13],base:[0,1,2,3,7,8,13,14],basic:5,becaus:1,becom:[0,5],befor:2,begin:13,below:[8,10,13,14],berkelei:[6,10],best:[5,8],beta:13,between:[1,13,14,15],bin:0,binari:10,block:1,bohr:1,boltzmann:[8,14],boltztrap2:[1,8],boltztrap:1,bolztrap2:[1,9],bool:[0,1],bose:13,both:[0,16],bottom:13,boundari:13,branch:5,briandk:5,brillouin:[2,8,14],broaden:[13,14],bsd:10,bug:10,built:8,busi:10,c_factor:3,c_ref:0,calcul:[0,1,2,7,8,11,13,14,16],calculate_band_r:3,calculate_do:0,calculate_g:3,calculate_in_r:3,calculate_mobl:[0,7],calculate_out_r:3,calculate_scattering_r:3,california:10,call:[0,2,14],can:[1,5,7,8,9,13,14,15,16],cannot:[0,1,14],career:6,carret:1,carri:2,carrier:[0,8,13,14],cartesian:1,cast_dict:2,caus:10,caution:[0,7],cband:0,cbm:[1,7,14],cell:14,certain:8,chang:[0,5,8],charg:[12,14],check:0,choic:0,choos:10,classmethod:0,cli:11,clone:9,cluster:8,code:[8,10,13],codebas:5,coeffici:[13,14,15],com:9,combin:[13,14],come:[],comma:14,command:[0,8,14],comment:5,commit:5,common:[8,13],commun:1,compar:5,compil:5,complet:15,comput:[0,1,2,8,10,14],computation:8,compute_volum:1,concentr:[0,7,13,14,15],conda:9,condit:[10,13,15],conduct:[0,15],configur:[2,9,16],confirm:5,conjunct:1,consecut:1,consequenti:10,conserv:0,consid:[0,13,14],constant:[0,7,8,11,13,14,15],constructor:[0,1],contain:[0,2,13,14],content:11,continu:0,contract:10,contrast:[],contribut:[6,13,14,15],contributor:[5,8,10],control:[1,7,14,16],converg:[0,8,14,15],conwel:[12,13],coordin:[1,2],coords_are_cartesian:1,copyright:10,core:1,correct:14,correspond:[0,13,14],cosin:[13,15],coupl:[1,2],cpu:1,crai:9,crash:14,craype_link_typ:9,creat:[2,5],create_shared_arrai:2,crystal:12,current:[5,8,13,16],curvatur:0,custom:[0,2],customis:0,cut:[1,14],cutoff:14,cxx:9,damag:10,data:[2,8,10,11],datefmt:2,debug:2,decim:0,defect:14,defin:[1,13,14,15],deform:[8,12,14],deformation_pot_str:2,deformation_potenti:[3,7,13,16],deformation_potential_cbm:7,degre:[1,13],delta:[13,14,15],denser:14,densif:[7,14],densifi:[0,11,14],densiti:[0,1,7,13,14,15],depart:6,depend:[1,9,13,14,15],dept:10,deriv:[1,2,10,14],descript:[4,13,14],detail:[1,7,14,15,16],determin:[0,1,2,7,14],develop:[5,6,10,13,14],df0de:2,dft:[8,13,14],dftdata:1,diagram:1,dict:[0,1,2],dictionari:[1,2,14,16],didn:5,dielectr:[7,8,13,14],differ:[0,1,15,16],differenti:[13,15],difficult:8,dimens:1,dimensionless:13,dingl:[12,13],dirac:[0,2,13,14,15],direct:[1,10,14],directli:[10,14],directori:[0,16],disclaim:10,discret:13,disk:14,dispers:14,distribut:[0,2,10,13,15],doc:0,document:[5,7,10,14,16],doe:[0,2,15],doesn:1,donor:[12,14],donor_charg:[3,7],dope:[0,7,15,16],doping_str:2,dos:[11,14],dos_estep:[0,1,7],dos_weight:0,dos_width:[0,7],draft:5,dublin:12,due:13,each:[0,1,8,13,14],earli:6,easi:[5,8],easili:[8,16],eband:0,ediff:3,edinburgh:12,efermi:0,effect:[1,14,15],effective_mass:1,effective_masss:1,eig:0,einstein:13,either:10,elast:[0,8,11,13,14],elastic_const:[3,7,13,16],elastic_r:3,elastic_scatter:3,electr:15,electron:[0,1,3,8,12,13,14,15],electronic_structur:0,electronic_thermal_conduct:0,element:[0,5],elsevi:12,emiss:[3,13,15],enabl:[8,14],encount:5,end:13,endors:10,energi:[0,1,2,6,10,13,14,15],energy_cutoff:[1,7],enhanc:10,ensur:[5,15],environ:9,epsilon_0:14,epsilon_:13,equal:[0,13,14],equat:[8,13,14],equilibrium:[0,2,15],equiv:15,erang:0,error:[0,2,5,14],essenti:0,estep:[1,14],estim:0,even:10,event:[2,10],ever:13,everi:13,everyon:8,exact:15,exactli:13,exampl:[0,2,5,14,16],example_set:2,excel:5,except:[0,2],exclus:10,exemplari:10,exist:1,exp:13,expect:5,expens:[0,1,8,14],exponenti:15,express:[10,13],extra:14,extra_energi:0,extra_kpoint:0,extra_project:0,extra_vveloc:0,extrapol:0,facebook:5,factor:[1,3,7,13,14,16],faghaninia:6,fail:0,fall:[1,5],fals:[0,1,2,3,7],fast:8,faster:1,fd_tol:[3,7],featur:[4,5,8,10],feel:5,fermi:[0,1,2,7,13,14,15],fermi_level:0,fermido:0,few:5,fewer:15,fibonacci_spher:1,field:[12,15],file:[0,2,7,8,14],file_format:[0,7],filenam:2,filepath:2,find:[0,5,14],finer:0,finish:5,finit:13,first:[0,2,8,9],fit:10,fix:[5,10],flag:14,flexibl:1,flow:5,fmt:2,folder:2,follow:[0,5,10,16],followup:5,forc:3,fork:[5,8],form:[10,13,15],formal:8,format:[1,2,14],formatexcept:2,formatt:2,formattim:2,fortun:15,found:[0,8],four:0,frac:[13,15],frac_point:1,fraction:[1,2],framework:5,francesco:6,free:[0,5,10],frequenc:[8,13,14],frohlich:[12,13],from:[0,1,2,5,6,8,10,13,14,15],from_dict:0,from_directori:[0,16],from_vasprun:0,from_vasprun_and_set:[0,16],frost:6,full:[1,5,13,14],full_kpoint:0,fund:6,further:5,futur:[8,13],g_1:15,g_b:13,g_tol:3,gamma:14,ganos:6,gap:[0,1,7,14],gauss:14,gauss_width:[3,7],gaussian:[0,1,13,14],gen_even_slic:2,gener:[1,2,7,8,13,15,16],geoffroi:6,get:[1,8],get_amset_data:1,get_band_r:3,get_do:1,get_dop:0,get_energi:1,get_fermi:0,get_fermi_interextrapol:0,get_ir_band_r:3,get_lattvec:1,get_line_mode_band_structur:1,get_scatter:3,getmessag:2,git:9,github:[8,9],give:[0,1,13],given:[0,1,2,7,13,14,15,16],going:2,good:[5,10],googl:5,got:8,gpa:[7,14],grant:10,greater:[14,16],greedi:0,grid:[0,1,16],group:[0,1,5,6,14,15],groupbi:2,grouped_ir_to_ful:3,guess:0,guid:5,guidelin:5,hack:6,hackingmateri:9,hand:15,handl:[1,8],handler:2,happen:5,hartre:1,has:15,hautier:6,have:[0,2,5,13],hbar:[13,15],heavi:5,heavili:8,help:[0,8,16],here:[0,5,7,8,14,16],herebi:10,high:[1,8,12,13,14,16],high_frequency_dielectr:[3,7,13],highest:14,highli:8,histogram:0,hitchhik:5,hold:[7,14],holder:10,hole:[0,12,13,14],host:5,how:13,howev:[5,8,10,13],http:9,i_factor:16,ibt:14,ibte_tol:7,icc:9,imp:[3,7,13,14],implement:[0,1,3,5,8,13],impli:10,impos:10,improv:[5,8,14],impur:[8,14],in_rat:3,incident:10,includ:[0,1,5,7,8,10,13,14],incorpor:[5,10],increas:14,index:8,indic:[0,7,14],indirect:10,individu:14,inel:15,inelast:[0,8,11,13],inelastic_scatter:3,ineleast:15,inequival:1,inform:[1,2,5,8,13],infti:13,initi:[0,1,2],initialis:0,initialize_amset_logg:2,input:[5,8,14,16],insid:9,instal:[8,10],instanc:[0,2],instead:[0,5,16],integr:[0,8],inteprolat:1,interband:13,interest:13,interfac:14,intern:[7,14],interpol:[0,7,8,11,13,14,16],interpolat:1,interpolate_factor:1,interpolate_project:1,interpolation_factor:[0,1,7,16],interrupt:10,intraband:13,invers:13,involv:8,ioniz:[8,14],ionizedimpurityscatt:3,iqueu:3,ir_kpoint:0,ir_kpoint_weight:0,ir_kpoints_idx:[0,3],ir_to_full_kpoint_map:0,is_met:0,issu:5,iter:[8,14],its:[0,5,10,13],itself:[0,15],jain:6,jason:6,json:[0,1,3,7,14],just:14,justif:13,k_diff_sq:3,k_idx:3,k_p_idx:3,kappa_:15,kelvin:[0,2,14],keyword:0,know:8,kpoint:[1,2,3,14],kpoint_mesh:[0,1],kpoint_norm:3,kpoint_weight:[0,3],kpoints_to_first_bz:2,kpt:13,kwarg:0,lab:6,laboratori:10,lambda_to_tau:0,laptop:8,larg:14,larger:14,last:0,lattic:[1,12,13],lattice_matrix:1,lawrenc:[6,10],lbnl:6,lead:14,leav:14,led:6,left:[0,13,15],length:13,let:8,level:[0,1,2,7,14,15],liabil:10,liabl:10,librari:8,licens:5,lifetim:[0,15],like:[8,13],limit:10,line:[0,1,8,14],line_dens:1,linearli:0,list:[1,3,5,8,10,14,16],list_str:2,load:2,load_settings_from_fil:2,log:[0,7,8,11,14],log_bann:2,log_error_traceback:7,log_list:2,log_time_taken:2,log_traceback:2,logger:2,logrecord:2,london:12,look:16,loss:10,louvain:6,love:5,low:[12,15],madsen:1,mag:12,magmom:1,magnet:1,mai:[9,10],main:[0,5,7,14],maintain:5,major:0,make:10,mani:5,mass:1,master:5,match:0,materi:[1,6,7,8,10,13,16],material_paramet:0,material_properti:0,materials_properti:3,math:[],mathbf:[13,15],mathcal:15,mathrm:[13,15],mathscr:[],matrix:[1,8],max:14,max_g_it:3,max_ibte_it:7,max_points_per_chunk:1,maximum:[0,1,14],mean:[0,5],meaning:5,mechan:[7,13,14],memori:1,menu:16,merchant:10,mesh:[1,7,14],messag:[2,14],met:10,metal:[1,14],method:[1,3],methodolog:13,might:5,minim:0,minimum:0,misc:[0,11],miss:2,mobil:[0,12,14],mode:[0,1],model:[0,8,13],modif:10,modifi:[7,10],modul:[8,11],moment:[1,15],mommat:1,monti:[0,1,3],more:[0,1,5,7,8,13,14,16],most:[1,14,15],move:[0,5],msonabl:[0,1,3],much:1,multipl:[1,13,16],must:[0,10,13],n_pack:2,nabla_:15,name:[3,10,15],narrow:14,nation:[6,10],nband:[0,1],ndarrai:[1,2],necessari:[5,8,16],need:[0,5,9,13,15],neg:[0,7,14],neglig:10,neither:10,nelec:0,nelect:0,neq:[13,15],nkpoint:[0,1,3],nois:13,non:[0,10,12],none:[0,1,2,3,14],nor:10,normal:0,nostrand:12,note:[0,1,5,8,14],notic:10,now:13,npt:0,nsplit:3,nstep:0,num:14,num_electron:[0,1],num_extra_kpoint:[1,7],num_step:14,number:[0,1,2,7,13,14],numer:13,numpi:[0,8],nworker:[1,3,7],object:[0,1,3],oblig:10,obtain:[0,8,13],occup:2,occur:2,off:[1,14],often:[8,14,15],omega:13,omega_:13,omit:0,one:7,onli:[7,13,14],onlin:7,open:[5,8,10,14],oper:[2,8],operand:2,optic:[8,14],optimis:8,option:[0,1,7,14,16],oqueu:3,orbit:[1,13],order:0,original_mesh:1,other:[0,5,6,10,12],otherwis:[10,13],otim:15,our:5,out:[2,10,15],out_rat:3,outer:[0,1],output:[7,8],output_paramet:0,over:[0,13,14],overal:13,overlap:8,overrid:[14,16],overview:8,owner:10,packag:[8,11],page:[8,13],parallel:1,paramet:[0,1,2,7,13,14,16],parse_deformation_potenti:2,parse_dop:2,parse_temperatur:2,part:15,particular:10,pass:[0,16],patch:10,path:[0,1,2,16],percent:14,percentag:14,perform:[1,7,8,10,16],performance_paramet:0,period:[8,13],periodicvoronoi:1,permiss:10,permit:10,perpetu:10,person:8,perturb:15,phi_:13,phi_p:13,philo:12,phonon:[8,14],phy:12,physic:1,pie:[3,7,13,14],piezeoelectric_coeffici:7,piezoelectr:[8,14],piezoelectric_coeffici:[3,13],piezoelectricscatt:3,pip:9,place:0,pleas:14,point:[0,1,2,7,8,13,14,15,16],polar:[0,8,12,14],polaropticalscatt:3,pop:[3,7,13,14],pop_frequ:[3,7,13],pose:13,posit:[0,7,14],possibl:[0,5,7,10],potenti:[8,12,14],precis:0,prefactor:3,prefix:[0,2],prepar:10,preparatori:2,present:14,press:12,primari:[6,8,14,16],primarili:6,prime:[13,15],principl:8,print:[14,16],print_log:7,prior:10,problem:[13,14],procedur:[5,15],process:[8,14,15],processor:[1,14],procur:10,product:[0,1,10],prof:6,profit:10,program:[6,16],progress:5,project:[0,1,13],promot:10,properli:9,properti:[1,8,13,14],propos:5,provid:[0,1,5,6,10,14,16],publicli:10,pull:8,purpos:10,push:5,pymatgen:[0,1,8],python:[5,8,14],pyvoro:1,qhull:1,question:5,quick:5,radiu:1,random:[1,15],rang:[0,1,14,16],rate:[0,7,8,14,15,16],rather:14,read:8,reason:1,receipt:10,reciproc:[1,13],reciprocal_lattice_matrix:3,recommend:14,record:2,redistribut:10,refer:[2,13,15],regent:10,region:14,regular:[1,16],rel:0,relat:0,relax:[0,15],releas:13,replac:13,repo:5,report:[13,14],repositori:9,repres:0,represent:0,reproduc:[5,7,10],request:8,requir:[1,2,7,9,10,13,14,15],required_properti:3,research:6,reserv:10,resourc:5,respect:[0,1,13,14,15],respons:5,rest:1,result:[7,15],retain:10,return_buff:2,return_effective_mass:1,return_electron_hole_conc:0,return_project:1,return_usage_stat:0,return_vel_outer_prod:1,return_veloc:1,rev:12,review:5,ricci:6,riemann:0,right:[10,13,15],rode:[12,13,15],roughli:14,royalti:10,rst:0,rta:15,rtol:0,run:[5,7,8,11,14,16],runner:16,s_a_factor:3,s_b:13,s_c_factor:3,s_energi:3,s_g:3,s_k_weight:3,s_kpoint:3,s_kpoint_norm:3,sai:1,same:[0,2,5,13],sampl:[1,5,13],scatter:[0,7,11,12,14,16],scatterer_label:3,scattering_label:0,scattering_model:0,scattering_r:0,scattering_typ:[0,3,7],scattering_work:3,scatteringcalcul:3,sci:12,scipi:[1,8],scissor:[0,1,7],screen:[8,13],script:0,search:[0,8],second:13,section:[7,8,13,14,16],see:[2,5,7,8,14],seebeck:[0,15],semiconductor:12,semimet:12,separ:[0,10,14],separate_scattering_mobl:[0,7],serializ:0,servic:[5,10],set:[0,1,2,8,15,16],set_doping_and_temperatur:0,set_extra_kpoint:0,set_scattering_r:0,settings_fil:0,settings_overrid:[0,16],shall:10,shape:0,share:9,shocklei:[12,13],should:[5,14],side:15,sigma:[13,14,15],similar:0,simpl:[0,13],simultan:7,singh:1,singl:[1,14],size:0,skip_coeffici:1,slice:2,small:15,smaller:[0,1,14],smear:[0,1,14],snippet:16,soc:[0,1],softwar:10,solid:8,solut:15,solv:[8,14,15],solve_bt:0,some:[0,5,8,9,14],someth:8,soon:14,sophist:13,sourc:[5,8,10],space:[1,5,14],spacegroup_symbol:2,special:10,specif:[5,10],specifi:[2,9,14,16],speed:[7,14],spin:[0,1,3],spread:14,sqrt:13,stack:5,standalon:16,start:14,state:[0,1,5,8,13,14,15],static_dielectr:[3,7,13,16],stdout:2,step:[0,1,2,5,14],still:5,stop:14,str:[0,2],strict:10,string:2,structur:[0,1,7,8,13,14,16],stuck:8,style:[2,5,10],subject:10,sublicens:10,submit:[5,8],submodul:11,subpackag:11,subscript:15,substitut:10,suffix_mesh:0,sum:[0,1],sum_:13,sum_b:15,summari:[5,13,16],summat:13,sunflower_spher:1,suppli:7,symmetri:[1,14,16],symprec:[1,7],syntax:14,system:[1,9,14],tab:5,take:[0,14],tau:15,tau_:15,tdo:[],team:5,tell:8,temperatur:[0,2,7,16],temperatures_str:2,templat:5,tensor:[1,2],tensor_averag:2,term:[13,15],tess:1,tessel:14,test:[5,14],text:[2,13],than:[1,14,15],theori:[8,10,13],therefor:13,thereof:10,thermal:15,thi:[0,1,3,5,7,8,10,13,14,15],think:5,thorough:5,those:[1,14,16],through:[6,8,10,13,16],throughput:8,thrown:0,thz:[7,14],time:[0,1,2,5,13,14,15],tip:5,to_fil:0,todo:0,tol:14,toler:[1,14],top:8,tort:10,total:[13,15],trace:[1,5],traceback:[2,14],track:[5,8],transistor:12,translat:2,transpar:5,transport:[1,11,12,13,14],transportcalcul:0,treat:1,tri:5,tupl:[0,1],two:[0,1,7,13,14],txt:14,type:[0,1,2,3,7,13,14],umklapp:13,under:[5,10,15],understand:[5,8],unicodeify_spacegroup:2,uniform:[0,8,16],uniform_lambda:0,uniform_tau:0,union:[0,1,3],unit:[0,1,14],unitless:[7,14],unittest:5,univers:10,unlik:13,updat:[0,5],upgrad:10,upon:15,use:[0,5,8,10,13,14,15,16],use_symmetri:3,used:[0,1,2,10,13,14,15,16],user:9,user_bandgap:0,user_set:2,uses:2,usestim:2,using:[0,1,2,6,9,13,14,15,16],util:[0,11],valid:1,validate_set:2,valu:[0,1,2,14,15],van:12,vasp:[1,8],vasprun:[0,16],vb_idx:0,vbm:[1,7,14],veloc:[0,1,14,15],veri:14,version:4,verstraet:1,versu:8,via:[9,14,16],virtual:9,volum:[13,14],voronoi:[0,11,14],vvband:0,vvelocities_product:0,w0gauss:3,wai:[5,8,10],want:[5,8],warn:0,warranti:10,wavefunct:13,weight:[0,14],welcom:5,well:[5,14],were:14,what:5,whatsoev:10,when:[0,1,5,13,14,16],where:[0,1,2,5,7,8,13,14,15],wherea:[0,15],whether:[0,1,2,5,10,14],which:[0,1,2,7,13,14,15],why:5,width:[0,1,2,13,14],within:1,without:[0,10],work:[1,5,10],worker:1,would:5,wrapper:0,wrappingformatt:2,write:[2,5,14],write_input:7,write_mesh:[0,7],write_set:0,write_settings_to_fil:2,written:[2,10,15],xciv:12,xml:16,yaml:[0,2,14,16],yet:[5,14],yield:2,york:12,you:[5,8,9,10,14],your:[5,10],zone:[2,8,14]},titles:["amset package","amset.interpolation package","amset.misc package","amset.scattering package","Change log","Contributing to AMSET","Contributors","Example settings","AMSET: ab initio scattering and transport","Installation","License","amset","References","Scattering rates","Settings","Theory","Using AMSET"],titleterms:{"new":8,Using:16,acceptor_charg:14,acoust:13,addit:5,amset:[0,1,2,3,5,8,9,11,16],api:[8,16],bandgap:14,boltzmann:15,brillouin:13,bug:5,calcul:[3,15],calculate_mobl:14,chang:4,cli:0,code:5,command:16,constant:2,contact:8,content:[0,1,2,3],contribut:[5,8],contributor:6,converg:16,data:0,deform:13,deformation_potenti:14,densifi:1,discuss:5,distribut:[],document:8,donor_charg:14,dope:14,dos:0,dos_estep:14,dos_width:14,elast:[3,15],elastic_const:14,energy_cutoff:14,equat:15,exampl:7,fd_tol:14,file:16,file_format:14,from:[9,16],gauss_width:14,gener:14,get:5,github:5,great:5,help:5,high_frequency_dielectr:14,how:5,ibte_tol:14,impur:13,inelast:[3,15],initio:8,instal:9,integr:13,interpol:1,interpolation_factor:14,introduct:8,ioniz:13,iter:15,licens:10,line:16,log:[2,4],log_error_traceback:14,make:5,manual:8,materi:14,max_ibte_it:14,mechan:8,misc:2,modif:5,modul:[0,1,2,3],nersc:9,note:13,num_extra_kpoint:14,nworker:14,optic:13,output:[14,16],overlap:13,overview:13,packag:[0,1,2,3],perform:14,perturb:[],phonon:13,piezoelectr:13,piezoelectric_coeffici:14,polar:13,pop_frequ:14,potenti:13,print_log:14,properti:15,pull:5,python:16,rate:13,refer:[5,12],report:5,request:5,run:0,scatter:[3,8,13,15],scattering_typ:14,scissor:14,separate_scattering_mobl:14,set:[7,14],solv:[],sourc:9,static_dielectr:14,submodul:[0,1,2,3],subpackag:0,support:8,symprec:14,temperatur:14,theori:15,through:5,transport:[0,8,15],unreleas:4,user:8,util:2,versu:15,voronoi:1,what:8,write_input:14,write_mesh:14,zone:13}})