package Tester;

import static utils.Constant.GECKO_DRIVER_DIRECTORY;

public class Test {

    public static void main(String[] args){

        System.out.println(System.getProperty("user.dir") + "src\\test\\java\\resources\\other\\geckodriver.exe");
        System.out.println(GECKO_DRIVER_DIRECTORY);
    }
}
