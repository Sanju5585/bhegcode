package com.bhge.util.setup;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;


/**
 * Created by 212595527 on 9/18/2017.
 */
public class RecaptchaResponse implements Serializable
{

	private static final long serialVersionUID = 4083373293221420031L;

	@JsonProperty("success")
	private boolean success;

	@JsonProperty("error-codes")
	private Collection<String> errorCodes;
	
	@JsonProperty("action")
	private String action;

	@JsonProperty("score")
	private Double score;

	@JsonProperty("challenge_ts")
	private Date challenge_ts;

	@JsonProperty("hostname")
	private String hostname;


	public boolean isSuccess()
	{
		return success;
	}

	public void setSuccess(final boolean success)
	{
		this.success = success;
	}

	public Collection<String> getErrorCodes()
	{
		return errorCodes;
	}

	public void setErrorCodes(final Collection<String> errorCodes)
	{
		this.errorCodes = errorCodes;
	}

	/**
	 * @return the action
	 */
	public String getAction()
	{
		return action;
	}

	/**
	 * @param action the action to set
	 */
	public void setAction(String action)
	{
		this.action = action;
	}


	/**
	 * @return the challenge_ts
	 */
	public Date getChallenge_ts()
	{
		return challenge_ts;
	}

	/**
	 * @return the score
	 */
	public Double getScore()
	{
		return score;
	}

	/**
	 * @param score the score to set
	 */
	public void setScore(Double score)
	{
		this.score = score;
	}

	/**
	 * @param challenge_ts the challenge_ts to set
	 */
	public void setChallenge_ts(Date challenge_ts)
	{
		this.challenge_ts = challenge_ts;
	}

	/**
	 * @return the hostname
	 */
	public String getHostname()
	{
		return hostname;
	}

	/**
	 * @param hostname the hostname to set
	 */
	public void setHostname(String hostname)
	{
		this.hostname = hostname;
	}

	@Override
	public String toString()
	{
		StringBuilder builder = new StringBuilder();
		builder.append("RecaptchaResponse [success=");
		builder.append(success);
		builder.append(", errorCodes=");
		builder.append(errorCodes);
		builder.append(", action=");
		builder.append(action);
		builder.append(", score=");
		builder.append(score);
		builder.append(", challenge_ts=");
		builder.append(challenge_ts);
		builder.append(", hostname=");
		builder.append(hostname);
		builder.append("]");
		return builder.toString();
	}
}
