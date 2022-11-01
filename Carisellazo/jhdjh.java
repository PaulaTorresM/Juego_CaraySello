//Estructuras ciclicas
//Paula Andrea Torres Paez
//2465879

import java.util.Scanner;
public class jhdjh {
  public static void main(String[] args) {
    Scanner ingreso=new Scanner (System.in);
    int opcion1,opcion2,apuesta,plata,seguir,plata2,plata1;
    plata=0;
    plata1=0;
    seguir=0;
    opcion1=1+(int)(Math.random()*2);
    System.out.println("¿cuanto desea apostar?");
    apuesta=ingreso.nextInt(); 
    

            do {     
                System.out.println("Seleccione una opcion \n 1. Cara \n 2. Sello");
                opcion2=ingreso.nextInt();
                if (opcion1==opcion2){
                    plata= apuesta*1;
                    plata1=plata*2; 
                    System.out.println("Usted ha ganado la opción de la maquina es "+opcion1);
                    System.out.println("fue un buen juego, la cantidad de dinero que tiene es   " +plata1);

                }
                else{
                    plata2= plata1/2;
                    System.out.println("Usted ha perdido la opción de la maquina es "+opcion1);
                    System.out.println("fue un buen juego, la cantidad de dinero que tiene es   " +plata2);

                }
                
                System.out.println("Para volver a jugar digite 1 o si desea salir digite 3");
                seguir=ingreso.nextInt();
            }while (seguir != 3);
            ingreso.close();
        }
    
    }
