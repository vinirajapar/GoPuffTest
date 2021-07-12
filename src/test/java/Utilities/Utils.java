package Utilities;

import com.twilio.Twilio;
import com.twilio.base.ResourceSet;
import com.twilio.rest.api.v2010.account.Message;

import java.util.ArrayList;
import java.util.List;

public class Utils {

    public static String getCode() {
        Twilio.init(ConfigReader.getProperty("ACCOUNT_SID"), ConfigReader.getProperty("AUTH_TOKEN"));
        String smsBody = getMessages();
        String code = smsBody.replaceAll("Your Gopuff code is ", "");

        return code;
    }


    private static String getMessages() {
        List<String> msg = new ArrayList<>();
        ResourceSet<Message> messages = Message.reader().limit(20).read();
        for (Message record : messages) {
            if (record.getBody().contains("Your Gopuff code is ")) {
                msg.add(record.getBody());
            }
        }
        return msg.get(0);
    }
}


