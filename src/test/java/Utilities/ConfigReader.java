package Utilities;

import java.io.FileInputStream;
import java.util.Properties;

public class ConfigReader {
    private static Properties pro;

    static{
        String path = "Configs.properties";
        try {
            FileInputStream file = new FileInputStream(path);
            pro = new Properties();
            pro.load(file);
            file.close();
        } catch (Exception e) {
            System.out.println("Path: " + path + " - not found.");
        }
    }

    public static String getProperty(String key){
        return pro.getProperty(key);
    }

}
